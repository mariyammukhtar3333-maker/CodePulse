require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigin = process.env.FRONTEND_ORIGIN || "http://127.0.0.1:5500";

app.use(helmet());
app.use(cors({ origin: allowedOrigin }));
app.use(express.json({ limit: "20kb" }));
app.use("/api/", rateLimit({ windowMs: 15 * 60 * 1000, limit: 60 }));

// Demo-only in-memory store. Messages disappear when the server restarts.
// Add a database and spam protection before using this for a real company.
const messages = [];

app.get("/api/health", (_req, res) => res.json({ status: "ok", service: "CodePulse API" }));

app.post("/api/contact", (req, res) => {
  const { name, email, phone = "", subject, message } = req.body || {};
  if (![name, email, subject, message].every(v => typeof v === "string" && v.trim())) {
    return res.status(400).json({ message: "Please complete name, email, topic and message." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }
  const record = { id: messages.length + 1, name: name.trim(), email: email.trim(), phone: String(phone).trim(), subject: subject.trim(), message: message.trim(), receivedAt: new Date().toISOString() };
  messages.push(record);
  console.log("Contact enquiry received:", { id: record.id, email: record.email, receivedAt: record.receivedAt });
  return res.status(201).json({ message: "Thank you! Your message has reached the CodePulse demo API.", id: record.id });
});

// Public API integration: backend fetches sample products from DummyJSON.
app.get("/api/products", async (_req, res) => {
  try {
    const upstream = await fetch("https://dummyjson.com/products?limit=6");
    if (!upstream.ok) throw new Error("Product provider unavailable");
    const data = await upstream.json();
    res.json({ products: data.products.map(({ id, title, price, category, thumbnail }) => ({ id, title, price, category, thumbnail })) });
  } catch (error) {
    res.status(502).json({ message: "Could not load product data right now." });
  }
});

app.listen(PORT, () => console.log(`CodePulse API running at http://localhost:${PORT}`));
