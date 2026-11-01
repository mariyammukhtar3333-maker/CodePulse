# CodePulse — Software House Website & Management Portal (Frontend Prototype)

A responsive HTML, CSS and vanilla JavaScript starter project for a software-house public website and internal management portal.

## Run the project
1. Extract `CodePulse.zip`.
2. Open the `CodePulse` folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Select **Team Login**.
5. Choose a demo role, enter an email such as `owner@codepulse.example`, and a demo password of at least 6 characters.
6. Click **First time? Set up demo account**, then click **Continue to portal**.

The demo account is saved only in this browser. Set up separate demo accounts for the roles you want to test. Use fake details and never use a real password.

## Included
- Public landing page, services, about and careers pages
- Internship/job application form (saved locally in the same browser)
- Demo login and first-time account setup
- Role-specific navigation for Owner, Manager, Employee, HR and Finance
- Owner demo access to all sections
- Project, task, team, meeting and event records
- Dashboard metrics, project progress and activity feed
- Light pink/purple theme and dark black/gold portal theme toggle
- Responsive layouts and CSS animations

## Important security limitation
This is a **frontend-only prototype**, not a secure company management system. `localStorage` and `sessionStorage` are readable and editable by people using the browser. The demo login is not real authentication. Role-based navigation is only a UI demonstration and can be bypassed. Do not store real passwords, employee personal data, salaries, client information, CVs or confidential owner records here.

Before real company use, build a backend and database. Recommended production architecture:
- Backend: Node.js + Express (or another maintained server framework)
- Database: PostgreSQL or MySQL
- Password hashing: Argon2id or bcrypt with appropriate parameters
- Sessions: secure, HttpOnly, SameSite cookies; rotate and invalidate sessions
- Recovery: verified email, single-use time-limited reset tokens
- Authorization: server-side RBAC and department/project scope checks on every request
- Owner account: MFA, separate privileged account, recovery controls
- Audit logs: append-only records for sensitive changes
- File uploads: server-side validation, access controls and private storage
- HTTPS, backups, rate limiting, CSRF protection and security testing

## Project structure
```text
CodePulse/
├── index.html
├── careers.html
├── login.html
├── portal.html
├── css/
│   ├── style.css
│   └── portal.css
├── js/
│   ├── public.js
│   ├── careers.js
│   ├── auth.js
│   └── portal.js
└── README.md
```

## Demo data
Demo records and application submissions are stored in browser storage on the current device/browser. Clearing site data removes them. Different browsers/devices do not share the records.
