# Job Application Tracker

A lightweight React application for tracking job applications, designed to help job seekers organize and manage their application pipeline with ease.

## 🎯 Project Overview

Job Application Tracker is a single-page application built with React that allows users to track their job applications in real-time. The application provides a clean interface for managing application details, filtering by status, and persisting data across sessions.

## ✨ Key Features

- **Add Job Applications** – Capture essential details including company, position, location, application date, status, and notes
- **Status-Based Filtering** – Quickly filter applications by status (Applied, Interview Scheduled, Offer Received, or view All)
- **Persistent Storage** – All application data is automatically saved to localStorage, ensuring information persists across browser sessions
- **Responsive UI** – Clean, intuitive interface built with React components
- **Real-Time Updates** – Immediate feedback as applications are added and filtered

## 🛠️ Technical Implementation

### Core Technologies
- **React** – Component-based UI architecture with hooks
- **Vite** – Fast development server and build tool
- **localStorage API** – Client-side data persistence

### React Concepts Demonstrated
- **State Management** – `useState` for managing jobs and filter state
- **Side Effects** – `useEffect` for localStorage synchronization
- **Component Architecture** – Modular, reusable components with clear separation of concerns
- **Props & Callbacks** – Parent-child communication patterns
- **Controlled Components** – Form inputs managed through React state
- **Derived State** – Filtering logic computed from existing state
- **List Rendering** – Dynamic rendering with proper key management

### Project Structure
```
src/
├── components/
│   ├── AddJobForm.jsx    # Form for adding new applications
│   ├── JobCard.jsx        # Individual job display card
│   └── Filter.jsx         # Status filter controls
├── App.jsx                # Main application component
└── main.jsx               # Application entry point
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📚 Learning Outcomes

This project was built as a learning exercise to develop proficiency in:
- React fundamentals and modern hooks
- Component-based architecture
- State management patterns
- Browser storage APIs
- Event handling and form management
- Immutable state updates
- User interface design principles

## 🎓 Development Approach

The application was built incrementally through focused sessions, each targeting specific React concepts:
1. Component rendering and list mapping
2. Component composition and props
3. State management with useState
4. Form handling with controlled inputs
5. Data filtering and derived UI
6. Data persistence with localStorage

This methodical approach demonstrates understanding of React fundamentals and the ability to build features systematically.

---

**Built with React + Vite**
