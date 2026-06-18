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
