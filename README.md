# Tiles Gallery

> A modern, responsive tile showcase gallery web application built with Next.js — discover, explore, and get inspired by beautiful tile designs from around the world.

🔗 **Live Site:** 

---

## 📖 Purpose

**Tiles Gallery** is a full-stack web application that allows users to explore a curated collection of tiles — from classic ceramics to modern geometric patterns. Users can browse the full gallery, search for specific tile styles, view high-resolution tile details, authenticate securely, and manage their personal profile — all within a beautifully animated, mobile-first interface.

---

## ✨ Key Features

### 🏠 Home Page
- **Hero Banner** — Large "Discover Your Perfect Aesthetic" section with a "Browse Now" CTA button linking to the full gallery
- **Marquee Scrolling Text** — Animated scrolling ticker displaying new arrivals, weekly featured patterns, and community highlights
- **Featured Tiles Section** — Dynamically fetches and displays the top 4 tiles from the server via `TopTiles.jsx`, each with a "View Details" button

### 🔐 Authentication
- **Email & Password Login** — Clean signin form (`/signin`) with real-time validation and toast error notifications
- **Google OAuth Login** — One-click Google authentication via BetterAuth + Google Cloud Console
- **User Registration** — Signup page (`/signup`) with name, email, photo URL, and password fields
- **Protected Routes** — Private routes (`/all-tiles/[id]`, `/profile`) redirect unauthenticated users automatically via `proxy.js` middleware
- **BetterAuth API Route** — `api/auth/[...all]/route.js` handles all auth operations

### 🖼 All Tiles Page (Gallery)
- **Search Bar** — `Search.jsx` component with HeroUI-powered input to filter tiles by title in real time
- **Tile Cards** — `TileCard.jsx` displays thumbnail, title, and a "Details" button navigating to the individual tile page

### 🔍 Single Tile Details Page (`/all-tiles/[id]`)
- **High-Resolution Preview** — Large tile image with full details
- **Tile Metadata** — Title, creator, style description, material, dimensions, price, stock status, and style tags
- **Loading State** — Dedicated `loading.jsx` spinner while tile data fetches
- **Private Route** — Only accessible to authenticated users

### 👤 Profile Page (`/profile`)
- **Profile Display** — Shows the logged-in user's name, email, and profile image
- **Update Modal** — `UpdateUserModal.jsx` opens an in-page modal form to change display name and avatar URL, connected to BetterAuth's update-user API

### 🎨 UI & Animations
- **Framer Motion** — Page transitions and section entrance animations
- **React Spring** — Physics-based micro-interactions and card hover effects
- **React Toastify** — Non-intrusive toast notifications for auth feedback
- **React Spinners & React Loader Spinner** — Loading indicators during data fetching (global `loading.jsx` + route-level `loading.jsx`)
- **DaisyUI + HeroUI** — Accessible component libraries for search, cards, and modals
- **Gravity UI** — Additional polished UI elements
- **Iconify + React Icons** — Consistent iconography across `NavBar.jsx`, `Footer.jsx`, and tile cards

### 📱 Responsiveness
- Fully responsive across **mobile**, **tablet**, and **desktop** breakpoints
- Mobile-first CSS with DaisyUI's responsive utility classes

### ⚙️ Other
- **Not-Found Page** — Custom `not-found.jsx` for invalid routes
- **Global Loading** — Root-level `loading.jsx` covers all navigation transitions
- **Environment Variables** — All secrets secured in `.env` and Vercel environment config
- **No Reload Errors** — Configured for SPA behavior; no 404s on route reload

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) |
| **Authentication** | [BetterAuth](https://better-auth.com/) + Google Cloud Console OAuth |
| **Database** | [MongoDB](https://www.mongodb.com/) (via BetterAuth MongoDB Adapter) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/), [React Spring](https://www.react-spring.dev/) |
| **UI Libraries** | [DaisyUI](https://daisyui.com/), [HeroUI](https://heroui.com/), [Gravity UI](https://gravity-ui.com/) |
| **Icons** | [Iconify](https://iconify.design/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Notifications** | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| **Loaders** | [React Spinners](https://www.davidhu.io/react-spinners/), [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📦 NPM Packages Used

```
next
react
react-dom
better-auth
mongoose
framer-motion
@react-spring/web
daisyui
@heroui/react
@gravity-ui/uikit
@iconify/react
react-icons
react-toastify
react-spinners
react-loader-spinner
```

---

## 🔐 Environment Variables

Create a `.env` file in the root of your project:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# BetterAuth
BETTER_AUTH_SECRET=your_betterauth_secret
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth (Google Cloud Console)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# App
NEXT_PUBLIC_API_URL=http://localhost:3000
```

> ⚠️ `.env` is listed in `.gitignore`. Never commit it.

---

## 🚦 Route Summary

| Route | Type | Description |
|---|---|---|
| `/` | 🌐 Public | Home page with banner, marquee, featured tiles |
| `/all-tiles` | 🌐 Public | Full gallery with search |
| `/all-tiles/[id]` | 🔒 Private | Individual tile detail page |
| `/signin` | 🌐 Public | Login with email or Google |
| `/signup` | 🌐 Public | Register new account |
| `/profile` | 🔒 Private | User profile + update modal |
| `/api/auth/[...all]` | ⚙️ API | BetterAuth handler |

---

## 📁 Project Structure

```
tiles-gallery/
├── src/
│   ├── app/
│   │   ├── all-tiles/
│   │   │   ├── [id]/
│   │   │   │   ├── page.jsx        # Single tile detail (private)
│   │   │   │   └── loading.jsx     # Tile detail loader
│   │   │   └── page.jsx            # All tiles gallery
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.js    # BetterAuth API handler
│   │   ├── profile/
│   │   │   └── page.jsx            # User profile (private)
│   │   ├── signin/
│   │   │   └── page.jsx            # Login page
│   │   ├── signup/
│   │   │   └── page.jsx            # Register page
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js               # Root layout
│   │   ├── loading.jsx             # Global loading state
│   │   ├── not-found.jsx           # 404 page
│   │   └── page.js                 # Home page
│   ├── assets/
│   │   ├── hero-banner.jpg
│   │   ├── hero-banner.png
│   │   └── logo.png
│   ├── components/
│   │   ├── Banner.jsx              # Hero banner with animation
│   │   ├── Footer.jsx              # Custom footer
│   │   ├── NavBar.jsx              # Responsive navbar
│   │   ├── Search.jsx              # Search input component
│   │   ├── TileCard.jsx            # Individual tile card
│   │   ├── TopTiles.jsx            # Featured tiles section (home)
│   │   └── UpdateUserModal.jsx     # Profile update modal
│   └── lib/                        # Auth & DB helpers
├── proxy.js                        # Route protection middleware
├── .env                            # Environment variables (gitignored)
├── .gitignore
├── next.config.mjs
├── postcss.config.mjs
├── eslint.config.mjs
├── jsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/your-usernamn/tiles-gallery.git
cd tiles-gallery

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your keys in .env

# 4. Run the development server
npm run dev

# 5. Open in browser
# http://localhost:3000
```

---

## 🌐 Deployment

Deployed on **Vercel** with all environment variables configured under Project Settings → Environment Variables. The app is configured so no route throws a 404 on reload.

---

## 👤 Author

**monirujjaman** — []()

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).