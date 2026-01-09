# Progress Log

This document tracks the development progress of the Job Application Tracker project, focusing on learning milestones, architectural decisions, and implemented features.

---

## Session 1 – Project Setup & Rendering Data
**Status:** ✅ Complete

- Set up a clean React + Vite project
- Removed boilerplate and started from a blank slate
- Defined an initial job application data model
- Rendered a list of job applications using `.map()`
- Learned and applied React list keys
- Established the pattern of small, frequent commits

**Key Concepts Learned:**
- Component-based thinking
- Rendering lists in React using `.map()`
- Importance of `key` props

---

## Session 2 – Componentisation (JobCard)
**Status:** ✅ Complete

- Created a dedicated `JobCard` component
- Passed job data from `App.jsx` to `JobCard` via props
- Rendered full job details (company, role, status, notes, etc.)
- Separated concerns between data ownership and presentation

**Key Concepts Learned:**
- Props vs imports
- Parent → child data flow
- Reusable component design

---

## Session 3 – State Management with useState
**Status:** ✅ Complete

- Converted the jobs array into React state using `useState`
- Understood the difference between normal variables and state
- Learned why React re-renders when state changes
- Ensured rendering logic remained unchanged after refactor

**Key Concepts Learned:**
- `useState` fundamentals
- State immutability
- Why state lives in the highest common parent

---

## Session 4 – Add Job Form (Controlled Inputs & State Updates)
**Status:** ✅ Complete

- Built an `AddJobForm` component
- Implemented controlled inputs for all form fields
- Managed form state using a single state object
- Passed a callback prop from `App` to `AddJobForm`
- Added new jobs to state on form submission
- Used functional state updates to avoid stale state bugs

**Key Concepts Learned:**
- Controlled vs uncontrolled inputs
- Child → parent communication via callback props
- Immutable updates to arrays in state
- Functional updates with `setState(prev => ...)`

---

## Session 5 – Filtering Job Applications
**Status:** ✅ Complete

- Added filter state to control job visibility
- Created a reusable `Filter` component
- Implemented status-based filtering using `.filter()`
- Ensured filtering was derived UI, not stored state
- Verified filtering works alongside adding new jobs

**Key Concepts Learned:**
- Derived UI vs mutated data
- Chaining `.filter()` and `.map()`
- Keeping state minimal and intentional

---

## Session 6 – Persistence with localStorage
**Status:** ✅ Complete

- Persisted job applications to `localStorage`
- Restored jobs from `localStorage` on page load
- Used lazy initialization with `useState`
- Saved jobs automatically via `useEffect` when state changes
- Ensured data survives page refreshes

**Key Concepts Learned:**
- `useEffect` for side effects
- Persisting state across sessions
- JSON serialization (`JSON.stringify` / `JSON.parse`)
- Separation of state logic and side effects

---

## Next Planned Sessions
- Session 7: Edit and delete job applications
- Session 8: Form validation and UX improvements
- Session 9: Refactoring and code cleanup
- Session 10: Deployment and README polish

---

## Notes
This project is intentionally built incrementally to reinforce core React concepts rather than relying on copy-paste solutions. Each session focuses on understanding *why* patterns are used, not just how.
