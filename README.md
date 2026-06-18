# infoLand

![Stack](https://img.shields.io/badge/stack-Node.js%20%7C%20React%20%7C%20Vite-blue)
![License](https://img.shields.io/badge/license-See%20README-lightgrey)

Shortland: A full-stack project for managing and exploring land plot data with a React + Vite frontend and an Express + MongoDB backend.

## Overview

infoLand is a compact platform that provides an API for land plot data (basic and detailed) and a React-based frontend for browsing, mapping, and inspecting plots. The repository contains two main parts:

- `backend/` — Express server, MongoDB models, and API routes for plot data.
- `frontend/` — React + Vite application with map views, plot selection UI, and authentication scaffolding.

## Objectives & Problem Statement

Many land administration and mapping tools are complex and heavyweight. infoLand aims to provide a minimal, developer-friendly platform to:

- Store and expose land plot records (both summary/basic and detailed survey geometries).
- Provide a lightweight UI to explore plots on a map and view details.
- Serve as a starting point for internships, technical interviews, and demo portfolios showcasing full-stack skills.

## Key Features (from repository)

- REST API with endpoints for basic and detailed plot records (`/api/plots/basic`, `/api/plots/detailed`).
- Mongoose data models for `PlotBasic` and `PlotDetailed` including coordinate geometry.
- React frontend using Vite, with map integration (Leaflet), Redux Toolkit slices for plots, and Firebase authentication scaffolding.
- Modern front-end tooling: Tailwind CSS, Vite, and ESLint.
- Backend dotenv support and MongoDB connectivity.

## Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or Atlas)
- (Optional) Firebase project for frontend authentication

## Installation

1. Clone the repository:

	 git clone <repo-url>
	 cd infoLand

2. Install dependencies for backend and frontend:

	 # Backend
	 cd backend && npm install

	 # Frontend
	 cd ../frontend && npm install

3. Create environment variable files as needed (see Environment Variables below).

## Environment Variables

This project expects environment variables for backend and frontend.

- Backend (`backend/.env`):

	- `MONGO_URI` — MongoDB connection string (required)
	- `PORT` — optional server port (default 5000)

- Frontend (Vite `.env` or `.env.local` in `frontend/`):

	- `VITE_API_KEY` — Firebase API key
	- `VITE_AUTH_DOMAIN` — Firebase auth domain
	- `VITE_PROJECT_ID` — Firebase project ID
	- `VITE_STORAGE_BUCKET` — Firebase storage bucket
	- `VITE_MESSAGING_SENDERID` — Firebase messaging sender id
	- `VITE_APPID` — Firebase app id

These keys are referenced by `frontend/src/firebase/firebase.config.js` and the backend reads `MONGO_URI` from `process.env` in `backend/server.js`.

## Local development

- Start the backend server (from `backend/`):

	npm run dev

- Start the frontend (from `frontend/`):

	npm run dev

Both servers can run concurrently; frontend expects the backend API under `/api/plots/*` (relative path used in the app).

## Build & Run (Production)

- Build frontend (from `frontend/`):

	npm run build

- Serve backend (from `backend/`):

	npm start

## Architecture

The project follows a simple full-stack separation:

- Backend (Express + MongoDB): exposes REST endpoints under `/api/plots/*` and contains Mongoose models for plot data.
- Frontend (React + Vite): single-page application that consumes the backend API, displays maps (Leaflet), and provides UI for selection and details.

### Technology Stack

| Layer | Primary Technologies |
|---|---|
| Backend | Node.js, Express, Mongoose, MongoDB |
| Frontend | React, Vite, Tailwind CSS, Leaflet, Redux Toolkit |
| Authentication | Firebase (client-side auth configured) |

### Repository Structure (top-level)

```
infoLand/
├─ backend/
│  ├─ src/
│  │  ├─ models/
│  │  │  ├─ PlotBasic.model.js
│  │  │  └─ PlotDetailed.model.js
│  │  └─ routers/
│  │     ├─ plotBasic.router.js
│  │     └─ plotDetailed.router.js
│  ├─ package.json
│  └─ server.js
├─ frontend/
│  ├─ src/
│  │  ├─ app/
│  │  ├─ components/
│  │  ├─ features/
│  │  ├─ pages/
│  │  └─ firebase/
│  ├─ package.json
│  └─ vite.config.js
├─ colony-map.html
```

### Major modules

- `backend/src/models` — Mongoose schemas defining `PlotBasic` and `PlotDetailed` records.
- `backend/src/routers` — Express routers exposing GET endpoints for listing and fetching plots by id.
- `frontend/src/pages` & `frontend/src/components` — UI pages (Home, MapSelection, PlotDetails) and shared components (Navbar, Footer, PlotCard).
- `frontend/src/features` — Redux slices for plot data (listed as `plots` and `detailedPlots`).


