cat > README.md <<EOF
# 🎮 GamerNet – Social Networking for Gamers

A full-stack web app built with **Next.js**, **MongoDB**, and **NextAuth.js**, designed for gamers to connect, share, find jobs, host tournaments, livestream, and build gaming organizations.

## 🌟 Features

- 🛂 **Auth** – Email/password + OAuth (Google, Discord) with NextAuth.js
- 👤 **Gamer Profiles** – Bio, stats, achievements, skills, experience
- 📝 **Feed** – Twitter-style posts (text, image, video), likes, comments
- 🏢 **Organizations** – Create and manage gaming orgs with admin dashboard
- 💼 **Jobs & Tournaments** – Post and apply for gaming jobs or tourneys
- 💬 **Chat** – Real-time 1:1 and group messaging (Socket.IO/WebSockets)
- 📺 **Livestream** – Embed Twitch/YouTube streams in profiles/org pages

## 🧱 Tech Stack

- **Framework:** Next.js (App Router)
- **Auth:** NextAuth.js
- **Database:** MongoDB + Mongoose
- **UI:** Tailwind CSS + shadcn/ui
- **Chat:** Socket.IO (or Ably)
- **ORM:** Mongoose
- **Styling:** Tailwind CSS

## 📁 Folder Structure

- `app/` – App Router pages
- `components/` – Reusable UI components
- `models/` – MongoDB Mongoose schemas
- `lib/` – DB connection, helpers
- `types/` – TypeScript definitions
- `hooks/` – Custom React hooks

## 🚀 Getting Started

```bash
npm install
npm run dev
