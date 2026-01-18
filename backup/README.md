# Provisions - Wong Sawang Curated Guide

A premium, curated guide website for **Wong Sawang (Soi 11)**, featuring local restaurants and services. Built with modern web technologies, focusing on aesthetics, fluid interactions, and a "Super Premium" user experience.

## Tech Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [GSAP](https://gsap.com/) + ScrollTrigger + Magnetic Effects
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Three.js](https://threejs.org/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Package Manager**: [Bun](https://bun.sh/)
- **UI Architecture**: React 19

## Key Features

- **Strategic Local Content**: Real data identifying key businesses in "Soi High-So" (Wong Sawang 11).
- **Floating Music Player**: Interactive, glassmorphic button for background ambience control.
- **Atmospheric Design**: Interactive 3D ambient lighting (Orange Theme) & Clean Minimalist UI.
- **Advanced Animations**: Kinetic typography, Magnetic buttons, and Scroll-triggered reveals.
- **Service Listings**: Dedicated sections for both **Restaurants** and **Lifestyle Services** (Salons, Pharmacy, Repair, etc.).

## Getting Started

This project uses **Bun**. Make sure you have it installed.

First, install dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: App Router pages (`/`, `/restaurants`, `/services`, `/about`).
- `src/app/components`: Reusable UI components (Navbar, FloatingButton, RestaurantCard, etc.).
- `src/data`: Centralized data (`restaurants.ts`, `services.ts`).
- `public`: Static assets (images, sounds).

## Pages

### Homepage (`/`)
- Hero Section with 3D elements.
- Methodology & Collections.
- Featured Restaurants (Editor's Picks).

### Restaurants Page (`/restaurants`)
- Curated list of dining spots.

### Services Page (`/services`)
- **[NEW]** Lifestyle services guide (Hair, Laundry, Health, Tech).
- Based on strategic area analysis.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://gsap.com/docs/v3/)
- [Lenis Documentation](https://lenis.darkroom.engineering/)
