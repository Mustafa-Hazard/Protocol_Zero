# 🎮 Protocol Zero — Backend

> ASP.NET Core 9 REST API for the Protocol Zero game discovery platform.

---

## 📌 Overview

The backend is a RESTful Web API built with ASP.NET Core 9. It follows a layered architecture with Controllers, Services, and Repositories. MongoDB is used as the database via the official .NET MongoDB driver.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| ASP.NET Core 9 | Web framework |
| C# 13 | Language |
| MongoDB .NET Driver | Database access |
| MongoDB | NoSQL database |
| Swagger / OpenAPI | API documentation |

---

## 📁 Folder Structure

```
GameDiscovery.API/
├── Controllers/
│   ├── GamesController.cs       # GET /api/games, GET /api/games/{id}
│   ├── GenresController.cs      # GET /api/genres
│   └── PlatformsController.cs   # GET /api/platforms
├── DTOs/
│   ├── GameDto.cs               # Game response shape
│   ├── GameQueryDto.cs          # Query parameters with validation
│   ├── GenreDto.cs              # Genre response shape
│   ├── PlatformDto.cs           # Platform response shape
│   └── ApiResponseDto.cs        # Generic response wrapper
├── Models/
│   ├── Game.cs                  # MongoDB Game document
│   ├── Genre.cs                 # MongoDB Genre document
│   └── Platform.cs              # MongoDB Platform document
├── Repositories/
│   ├── MongoDbContext.cs        # MongoDB connection and collections
│   ├── IGameRepository.cs       # Game repository contract
│   ├── GameRepository.cs        # MongoDB game queries
│   ├── IGenreRepository.cs      # Genre repository contract
│   ├── GenreRepository.cs       # MongoDB genre queries
│   ├── IPlatformRepository.cs   # Platform repository contract
│   └── PlatformRepository.cs   # MongoDB platform queries
├── Services/
│   ├── IGameService.cs          # Game service contract
│   ├── GameService.cs           # Game business logic + mapping
│   ├── IGenreService.cs         # Genre service contract
│   ├── GenreService.cs          # Genre business logic
│   ├── IPlatformService.cs      # Platform service contract
│   └── PlatformService.cs       # Platform business logic
├── Middleware/
│   └── ErrorHandlingMiddleware.cs  # Global exception handler
├── Extensions/
│   └── ServiceCollectionExtensions.cs  # DI registrations
├── appsettings.json             # MongoDB connection config
└── Program.cs                   # App entry point and pipeline
```

---

## 🚀 Getting Started

### Prerequisites

- .NET SDK 9
- MongoDB running on `localhost:27017`
- MongoDB Compass (optional, for viewing data)

### Install and run

```bash
cd backend/GameDiscovery.API
dotnet restore
dotnet run
```

API runs at `http://localhost:5161`
Swagger UI at `http://localhost:5161/swagger`

---

## 📡 API Reference

### GET /api/games

Returns a paginated, filtered, sorted list of games.

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| search | string | null | Title search (case-insensitive) |
| sortBy | string | relevance | relevance, rating, releaseDate, title |
| genres | string[] | null | Filter by genres (OR logic) |
| platforms | string[] | null | Filter by platforms (OR logic) |
| page | int | 1 | Page number (1-100) |
| pageSize | int | 20 | Results per page (1-50) |

**Example:**
```
GET /api/games?search=elden&sortBy=rating&genres=RPG&page=1&pageSize=10
```

**Response:**
```json
{
  "success": true,
  "message": "OK",
  "data": [...],
  "totalCount": 8
}
```

---

### GET /api/games/{id}

Returns a single game by MongoDB ObjectId.

**Response:**
```json
{
  "success": true,
  "message": "OK",
  "data": {
    "id": "64a1b2c3d4e5f6789",
    "title": "Elden Ring",
    "description": "...",
    "coverImage": "...",
    "releaseDate": "2022-02-25",
    "rating": 9.5,
    "genres": ["RPG", "Action"],
    "platforms": ["PC", "PlayStation 5"],
    "relevanceScore": 98
  },
  "totalCount": null
}
```

---

### GET /api/genres

Returns all genres.

### GET /api/platforms

Returns all platforms.

---

## 🏗️ Architecture

### Layered Design

```
Request → Controller → Service → Repository → MongoDB
Response ← Controller ← Service ← Repository ← MongoDB
```

- **Controllers** handle HTTP only — no business logic
- **Services** handle business logic, validation, and DTO mapping
- **Repositories** handle all MongoDB queries
- **Models** represent MongoDB documents
- **DTOs** represent the API contract with the frontend

### Dependency Injection

All services are registered in `Extensions/ServiceCollectionExtensions.cs`:

```csharp
services.AddSingleton<MongoDbContext>();       // one instance, app lifetime
services.AddScoped<IGameRepository, GameRepository>(); // one per request
services.AddScoped<IGameService, GameService>();
```

### Generic Response Wrapper

Every endpoint returns `ApiResponseDto<T>`:

```json
{
  "success": true | false,
  "message": "OK" | "error message",
  "data": T | null,
  "totalCount": number | null
}
```

---

## ⚙️ Configuration

`appsettings.json`:

```json
{
  "MongoDB": {
    "ConnectionString": "mongodb://localhost:27017",
    "DatabaseName": "ProtocolZero"
  }
}
```

---

## 🗃️ MongoDB Collections

### games
```json
{
  "title": "string",
  "description": "string",
  "coverImage": "string (URL)",
  "releaseDate": "ISODate",
  "rating": "double",
  "genres": ["string"],
  "platforms": ["string"],
  "relevanceScore": "int"
}
```

### genres
```json
{
  "name": "string"
}
```

### platforms
```json
{
  "name": "string",
  "slug": "string"
}
```

---

## 🛡️ Error Handling

All unhandled exceptions are caught by `ErrorHandlingMiddleware` and returned as:

```json
{
  "success": false,
  "message": "An unexpected error occurred. Please try again later.",
  "data": null,
  "totalCount": null
}
```

---

## 🌐 CORS

Configured to allow requests from `http://localhost:5173` (React dev server). Update in `Program.cs` for production deployment.
