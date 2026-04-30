# 🎮 Protocol Zero

> A full-stack game discovery platform featuring genre-based browsing, platform filtering, and relevance-based sorting — built with React, ASP.NET Core, and MongoDB.

![Protocol Zero Banner](https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg)

---

## 📌 Overview

Protocol Zero is a game discovery web application that lets users explore a curated catalog of games. Users can search by title, filter by genre and platform, sort by rating or release date, and view detailed information for each game.

The project is structured as a monorepo with a decoupled frontend and backend — the React app consumes a REST API built with ASP.NET Core, backed by a MongoDB database.

---

## 🏗️ Architecture

```
Protocol-Zero/
├── frontend/          # React + TypeScript (Vite)
├── backend/
│   └── GameDiscovery.API/   # ASP.NET Core Web API
└── README.md
```

```
Browser → React Frontend → ASP.NET Core API → MongoDB
```

---

## ✨ Features

- 🔍 **Dynamic Search** — real-time title search with instant results
- 🎛️ **Genre Filtering** — filter by Action, RPG, Horror, Strategy and more
- 🖥️ **Platform Filtering** — filter by PC, PlayStation 5, Xbox, Nintendo Switch, Mobile
- 📊 **Relevance Sorting** — sort by relevance, rating, release date, or title
- 🎮 **Game Detail Pages** — full game info with cover art, genres, platforms, and rating
- 🌙 **Dark / Light Mode** — persistent theme preference saved to localStorage
- 📱 **Responsive Design** — works on all screen sizes

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite |
| State Management | Redux Toolkit |
| UI Library | React Bootstrap |
| Routing | React Router v6 |
| HTTP Client | Axios |
| Backend | ASP.NET Core 9 |
| Database | MongoDB |
| ODM | MongoDB .NET Driver |
| API Docs | Swagger / OpenAPI |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- .NET SDK 9
- MongoDB (local or Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/Mustafa-Hazard/Protocol_Zero.git
cd Protocol_Zero
```

### 2. Start the backend

```bash
cd backend/GameDiscovery.API
dotnet restore
dotnet run
```

API runs at `http://localhost:5161`

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

App runs at `http://localhost:5173`

### 4. Seed the database

Import the following JSON files into MongoDB Compass under the `ProtocolZero` database:
- `games` collection
- `genres` collection
- `platforms` collection

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/games` | Get all games with filters |
| GET | `/api/games/{id}` | Get single game by ID |
| GET | `/api/genres` | Get all genres |
| GET | `/api/platforms` | Get all platforms |

---

## 📁 Project Structure

- [`/frontend`](./frontend/README.md) — React + TypeScript frontend documentation
- [`/backend`](./backend/README.md) — ASP.NET Core backend documentation

---

## 👤 Author

**Mustafa Muhammad Iqbal**
- GitHub: [@Mustafa-Hazard](https://github.com/Mustafa-Hazard)

---

## 📄 License

This project is for educational purposes.
