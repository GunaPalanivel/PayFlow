# 🚀 Pay Flow – Subscription Management System API

A full-stack-ready backend built to handle real-world subscription workflows. Built during **FOSS Hack 2025**, this API is focused on solving a problem that every SaaS team faces: managing recurring payments in a secure, scalable, and maintainable way.

> 🔗 [📘 Backend Docs](./Backend%20Doc's) — Detailed breakdowns, design decisions, and implementation notes.

---

## 📅 Hackathon: FOSS Hack 2025

We submitted this at [FOSS Hack 2025](https://fossunited.org/fosshack/2025) – India’s largest open-source hackathon with a ₹5L prize pool.

Despite juggling internships and Bangalore traffic 🫠, we managed to ship this MVP. It’s not finished yet, but we’re proud of the architecture and vision behind it. Work is ongoing.

📍 [Project Submission](https://fossunited.org/hack/fosshack25/p/21ks4ol456)  
📍 [LinkedIn Post](https://www.linkedin.com/posts/guna-palanivel_%F0%9D%97%A3%F0%9D%97%AE%F0%9D%98%86-%F0%9D%97%99%F0%9D%97%B9%F0%9D%97%BC%F0%9D%98%84-%F0%9D%97%A0%F0%9D%98%86-%F0%9D%97%9D%F0%9D%97%BC%F0%9D%98%82%F0%9D%97%BF%F0%9D%97%BB%F0%9D%97%B2%F0%9D%98%86-activity-7303383872333877248-WuTT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1iPIIBQeYlEGyQlhSmzyVizNLkjpHgngw)

---

## 📌 TL;DR

If you're building a product with recurring billing, Pay Flow gives you:
- **Secure auth (JWT + RBAC)**
- **Custom subscription tiers**
- **Automated workflows (emails, retries, reminders)**
- **Built-in fraud protection**
- **Future-ready Stripe and GraphQL support**

---

## 📦 Tech Stack

| Layer        | Tooling                  | Why?                                                                 |
|--------------|--------------------------|----------------------------------------------------------------------|
| Language     | Node.js (ES2022+)        | Async-first, fast, and community-rich.                              |
| Framework    | Express.js               | Lightweight, middleware-centric routing.                            |
| Database     | MongoDB + Mongoose       | Schema flexibility + fast prototyping.                              |
| Auth         | JWT                      | Stateless auth with role-based access.                              |
| Security     | Arcjet                   | Rate-limiting, anti-bot, basic WAF.                                 |
| Workflows    | Upstash (Redis)          | Email reminders, retry jobs, and expiry alerts.                     |
| Emails       | Nodemailer               | Simple SMTP-based transactional mail.                               |

---

## 📖 Why We Built This

### ❓ Problem

Managing subscriptions is deceptively complex. Payments can fail. Customers forget to renew. Fraud happens. Most startups duct-tape solutions together using spreadsheets and manual follow-ups. That doesn't scale.

### ✅ Our Solution

We built a **modular backend API** that abstracts away the hard parts of subscription management:

- 🔐 Auth: JWT-based with RBAC support (admin, user).
- 💳 Plans: CRUD APIs for plans (free, standard, premium).
- 🔁 Renewals: Automate recurring reminders & retries.
- 📬 Notifications: Email users before/after critical events.
- 🚫 Security: Arcjet blocks malicious traffic out-of-the-box.

---

## ⚙️ How It Works

### Auth Flow (User + Admin)
- Sign-up/Login routes issue JWTs.
- Middleware checks roles before protected actions.
- Passwords hashed with bcrypt, tokens signed with env-based secrets.

### Subscription Engine
- Plans stored in MongoDB.
- Each user links to a `subscription` document with `status`, `expiry`, and `planId`.

### Automation with Redis (Upstash)
- Redis TTL keys for auto-expiry.
- Worker runs every minute to check for:
  - Renewals
  - Reminders
  - Failed payment retries

### Emails via Nodemailer
- Transactional emails sent on:
  - Signup
  - Upcoming expiry
  - Payment success/failure

### Security Layer
- Arcjet blocks:
  - Excessive request spam
  - Common attack vectors (bots, brute-force)

---

## 🗓 Project Timeline

### 🟢 Initial
- DB schema design (MongoDB + Mongoose)
- Auth system with JWT + RBAC
- Basic user & plan APIs

### 🔵 Current
- Email automation via Upstash
- Arcjet integration for bot protection
- Clean API error handling and logging

### 🟣 Future
- Stripe integration (Webhooks + Checkout)
- GraphQL support (Apollo server)
- Unit tests (Jest + Supertest)
- Docker-based deployment setup

---

## 🧠 Learnings (Real Talk)

This project was a crash course in:
- Building scalable Node.js APIs fast and clean
- Designing for real-world edge cases (failed payments, expiry tracking)
- Writing code that others (or future you) can actually maintain
- Balancing security, performance, and dev speed under hackathon pressure

---

## 🏁 Quick Start

### ⚙️ Prerequisites

- Node.js v18+
- MongoDB Atlas (or local instance)
- Redis (Upstash or local)
- `.env` file with the following:

```env
JWT_SECRET=your_secret_key
MONGODB_URI=your_connection_string
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_user
SMTP_PASS=your_pass
```

### 🚀 Installation

```bash
git clone https://github.com/GunaPalanivel/PayFlow.git
cd PayFlow
npm install
npm run dev
```

The API starts on `http://localhost:3000`

---

## 💡 Features

- [x] JWT Auth & Role Management
- [x] Subscription Plans CRUD
- [x] Automated Expiry Reminders
- [x] Email Notifications
- [x] Rate Limiting & Security Middleware
- [ ] Stripe Checkout Integration (Upcoming)
- [ ] GraphQL API Layer (Upcoming)
- [ ] Dockerfile + Prod-ready setup (Upcoming)
- [ ] Testing Coverage (Jest + CI pipeline)

---

## 🧑‍💻 Contributing

We welcome contributions, big or small. Here’s how to get started:

```bash
# 1. Fork the repo
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/PayFlow.git

# 3. Create a new feature branch
git checkout -b feature/something-cool

# 4. Make your changes and commit
git commit -m "feat: added something cool"

# 5. Push and open a PR
git push origin feature/something-cool
```

### ✅ PR Guidelines

- Write clean, descriptive commit messages.
- Stick to existing file structure and conventions.
- Add tests if adding new features or logic.
- Document your feature if it affects usage.

---

## 📌 Final Thoughts

Pay Flow isn't just a hackathon project. It’s a foundation for what a subscription backend should look like: secure, scalable, and built with real-world challenges in mind.

If you're building a SaaS product, feel free to fork, clone, or contribute. Let’s build subscription infra that doesn’t suck.

---

Want this in your SaaS stack? Open a PR or drop an issue. We’re just getting started.
