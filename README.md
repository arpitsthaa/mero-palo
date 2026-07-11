# Mero Palo — Hospital Queue-Less System

**Mero Palo** ("my turn" in Nepali) is a queue-less hospital token booking app.
Patients book a token for a department, track their live position, and walk
in only when they're actually next — no physical waiting room required.

Built as the final assignment for **React.js & Modern Frontend Development**.

## Tech stack

- React 19 + Vite
- React Router (client-side routing)
- Tailwind CSS + DaisyUI
- React Context + Hooks (`useState`, `useEffect`) for state management
- `localStorage` as a mock persistence layer (no backend required)

## Features

- **Auth UI**: Login, Register, Forgot Password (client-side validation)
- **6 departments** with live queue stats (General, Dental, Pediatrics, Orthopedics, Cardiology, ENT)
- **Token booking flow** with confirmation modal and a custom "paper ticket" component
- **Dashboard**: active tokens, cancel token, history table
- **Profile & Settings** pages
- **Admin panel** with sidebar navigation, tabs, and token management
- **Responsive** across mobile, tablet, and desktop
- **404 page**

## Project structure

```
src/
  assets/
  components/   # Navbar, Footer, Ticket, DepartmentCard, Modal, Button, FormInput, ProtectedRoute
  layouts/       # MainLayout
  pages/         # Home, About, Departments, DepartmentDetail, Login, Register,
                 # ForgotPassword, Dashboard, Profile, Settings, Admin, Contact, NotFound
  context/       # AuthContext
  data/          # departments.js (mock data)
  utils/         # storage.js (localStorage helpers)
```

## Getting started

```
npm install
npm run dev
```

## React concepts demonstrated

- Functional components & component reusability (Button, FormInput, Ticket, Modal, DepartmentCard)
- Props, conditional rendering, list rendering
- useState, useEffect
- React Router (nested routes, dynamic params, protected routes)
- Context API for global auth state
- Controlled forms & event handling

## Design notes

Palette built around a clinical teal, warm cream background, and amber accent
for waiting-state tokens. The signature visual element is the Ticket
component — a queue token styled like a physical perforated paper ticket,
tying back to the "take your turn" concept the app is named after.
