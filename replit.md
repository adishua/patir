# Patir (פתיר) - Legal Services Landing Page

## Overview

This is a Hebrew-language, Right-to-Left (RTL) single-page application for a legal services firm specializing in criminal record expungement and case closures. The application serves as a professional landing page with a contact form for lead generation, dynamic content sections for services and testimonials, and smooth scroll navigation between sections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing (single-page app with one main route)
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for scroll effects and section animations
- **Smooth Scrolling**: react-scroll for navigation between sections
- **State Management**: TanStack React Query for server state and data fetching
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **RTL Support**: Global RTL direction set in HTML and React root component

### Backend Architecture
- **Framework**: Express 5 (ESM modules)
- **API Pattern**: RESTful endpoints defined in shared/routes.ts with Zod schemas
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Build System**: Vite for frontend, esbuild for server bundling

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: shared/schema.ts (shared between client and server)
- **Tables**:
  - `inquiries`: Contact form submissions (name, phone, message)
  - `services`: Legal service offerings (title, description, icon)
  - `testimonials`: Client reviews (name, role, content, rating)
- **Migrations**: Drizzle Kit with migrations output to /migrations directory

### API Structure
All API routes are defined in shared/routes.ts for type-safe client-server communication:
- `GET /api/services` - Fetch all legal services
- `GET /api/testimonials` - Fetch all testimonials
- `POST /api/inquiries` - Submit contact form inquiry

### Project Structure
```
client/           # React frontend
  src/
    components/   # UI components (layout, sections, ui)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
    pages/        # Page components
server/           # Express backend
  db.ts           # Database connection
  routes.ts       # API route handlers
  storage.ts      # Database operations layer
  static.ts       # Static file serving
shared/           # Shared between client/server
  schema.ts       # Drizzle database schema
  routes.ts       # API route definitions with Zod
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via DATABASE_URL environment variable
- **Drizzle ORM**: Type-safe database queries and schema management

### UI Component Library
- **shadcn/ui**: Radix UI primitives with Tailwind styling (New York variant)
- **Lucide React**: Icon library for service icons and UI elements

### Key NPM Packages
- `@tanstack/react-query`: Data fetching and caching
- `framer-motion`: Animation library for scroll effects
- `react-scroll`: Smooth scrolling navigation
- `react-hook-form`: Form state management
- `zod` / `drizzle-zod`: Schema validation shared between client and server
- `wouter`: Lightweight React router

### Fonts
- **Assistant**: Hebrew-supporting Google Font (primary typeface)

### Development Tools
- Vite with React plugin for frontend development
- Replit-specific plugins for development banners and error overlays
- TypeScript with strict mode and path aliases (@/, @shared/)