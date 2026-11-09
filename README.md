# CodePulse — Week 4 Backend & API Integration

A multi-page HTML/CSS/vanilla JavaScript software-house website prototype with a Node.js + Express API.

## What's included
- Shared light/dark theme preference across public pages and portal pages.
- Light palette: pastel pink/purple. Dark palette: black/gold.
- Leadership and team profile sections (illustrative sample people/photos).
- Contact form connected to `POST /api/contact`.
- Live product cards loaded from DummyJSON through `GET /api/products`.
- API health endpoint: `GET /api/health`.
- Express, CORS, Helmet and basic API rate limiting.
- `.env.example` and `.gitignore`.

## Run the backend
1. Install Node.js (LTS or newer).
2. Open a terminal in the `backend` folder.
3. Run `npm install`.
4. Copy `.env.example` to `.env`.
5. Run `npm run dev` (or `npm start`).
6. Keep this terminal running. The API uses `http://localhost:3000`.

## Run the website
Open the project folder in VS Code and use the Live Server extension. The default allowed frontend origin is `http://127.0.0.1:5500`. If Live Server uses another port/origin, update `FRONTEND_ORIGIN` in `backend/.env` and restart the backend.

## Test endpoints
- `GET http://localhost:3000/api/health`
- `GET http://localhost:3000/api/products`
- `POST http://localhost:3000/api/contact`

Example JSON body for contact:
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "+92 300 1234567",
  "subject": "Website development",
  "message": "I would like to discuss a website project."
}
```

## Important before publishing
- Phone, email, address, owner bios and team profiles/photos are sample placeholders. Replace them with approved official company details.
- Contact enquiries are held in server memory only and disappear when the server restarts. Connect a database and notification/email service for production.
- This is a learning prototype, not a production-secure employee portal. Frontend theme and page visibility do not provide authentication or authorization. Never put real employee, payroll, client or owner-private data here until secure backend login, password hashing, server-side role checks, database access controls and password-reset flows are implemented.
- Do not commit `.env`, passwords, API secrets or private data to GitHub.
