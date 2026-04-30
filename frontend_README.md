# 🎮 Protocol Zero — Frontend

> React + TypeScript frontend for the Protocol Zero game discovery platform.

---

## 📌 Overview

The frontend is a single-page application built with React 18 and TypeScript. It communicates with the ASP.NET Core backend via REST API calls through Axios and manages global state with Redux Toolkit.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI library |
| TypeScript | Type safety |
| Vite | Build tool and dev server |
| Redux Toolkit | Global state management |
| React Router v6 | Client-side routing |
| React Bootstrap | UI components |
| Axios | HTTP client |

---

## 📁 Folder Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── GameCard/         # Individual game tile
│   │   ├── GameGrid/         # Responsive game grid
│   │   ├── FilterPanel/      # Genre + platform filter drawer
│   │   │   ├── GenreFilter.tsx
│   │   │   └── PlatformFilter.tsx
│   │   ├── SearchBar/        # Controlled search input
│   │   ├── SortDropdown/     # Sort options select
│   │   ├── Navbar/           # Top navigation bar
│   │   └── ThemeToggle/      # Dark / light mode toggle
│   ├── hooks/
│   │   ├── useFilters.ts     # Redux filter state bridge
│   │   ├── useGames.ts       # Game data fetching hook
│   │   └── useDarkMode.ts    # Theme persistence hook
│   ├── pages/
│   │   ├── Home.tsx          # Main discovery page
│   │   ├── GameDetail.tsx    # Single game detail page
│   │   └── BrowseByGenre.tsx # Genre-filtered game list
│   ├── services/
│   │   ├── axiosClient.ts    # Axios instance with base URL
│   │   └── gameApi.ts        # API call functions
│   ├── store/
│   │   ├── filterSlice.ts    # Filter state and actions
│   │   ├── gameSlice.ts      # Game state and async thunk
│   │   └── store.ts          # Redux store configuration
│   ├── types/
│   │   ├── Game.ts           # Game, Genre, Platform interfaces
│   │   └── Filter.ts         # GameFilters, SortOption types
│   ├── App.tsx               # Router and layout
│   ├── main.tsx              # Entry point with Redux Provider
│   └── index.css             # Global styles and dark mode
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Backend API running on `http://localhost:5161`

### Install and run

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`

---

## 🔄 Data Flow

```
User types in SearchBar
    → dispatch(setSearch) → Redux filterSlice
    → useGames reads new filters
    → dispatch(fetchGames) → gameApi.getGames
    → Axios GET /api/games?search=...
    → Backend returns JSON
    → gameSlice.fulfilled updates state.games
    → GameGrid re-renders with new results
```

---

## 🧩 Key Components

### GameCard
Displays a single game with cover image, title, description, genre badges, rating, and release year. Clicking the card navigates to the game detail page. Clicking a genre badge navigates to the genre browse page.

### FilterPanel
An offcanvas drawer with genre and platform checkboxes. Each checkbox dispatches a `toggleGenre` or `togglePlatform` action to the Redux store. Includes a reset button.

### useGames Hook
Connects the Home page to the API. Accepts the current filters as input, dispatches `fetchGames` whenever filters change, and returns the games array along with loading and error states.

### useDarkMode Hook
Manages dark/light theme using `useState` and `localStorage`. Adds or removes the `dark` class on the `<html>` element which triggers CSS variable overrides.

---

## 🌐 API Integration

Base URL is configured in `src/services/axiosClient.ts`:

```ts
baseURL: 'http://localhost:5161/api'
```

All API functions are in `src/services/gameApi.ts`. They unwrap the backend's `ApiResponseDto` wrapper:

```ts
export const getGames = async (filters: GameFilters): Promise<Game[]> => {
  const { data } = await axiosClient.get('/games', { params: filters });
  return data.data; // unwrap ApiResponseDto
};
```

---

## 🎨 Styling

- Bootstrap utility classes for layout and spacing
- Custom CSS in `index.css` for gaming theme
- Dark mode via `html.dark` class toggling
- Card hover animations with `transform: translateY(-6px)`
- Blue accent color: `#1f6feb`

---

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```
