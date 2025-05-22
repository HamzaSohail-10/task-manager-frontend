# 🚀 Task Management Web Application (Frontend)

This is the frontend of a Task Management Web App built using **React.js**, **Redux Toolkit**, and **TailwindCSS**. It allows users to create, view, edit, delete, filter, and manage tasks efficiently. The UI also supports **light/dark mode**, search, and deadline-based warning badges.

---

## 📂 Folder Structure & Logic
```
frontend/
├── src/
│ ├── components/
│ │ ├── Header.jsx # Top navigation bar
│ │ ├── Footer.jsx # Footer section
│ │ ├── TaskCard.jsx # Displays each task card, includes EditTaskModal
│ │ ├── ConfirmationModal.jsx # Modal to confirm task deletion
│ │ ├── SearchBar.jsx # Search input to filter tasks by title
│ │ ├── FilterBar.jsx # Dropdown filters by task status
│ │ ├── DarkModeToggle.jsx # Button to toggle light/dark theme
│ ├── pages/
│ │ ├── TaskDashboard.jsx # Main dashboard showing all tasks with filters
│ │ └── CreateTask.jsx # Page to create a new task
│ ├── redux/
│ │ ├── taskSlice.js # Redux logic for task state, async actions
│ │ └── store.js # Configures Redux store
│ ├── App.js # Main app component with routing
│ ├── index.css # Tailwind base styles
│ └── index.js # React root entry point
├── tailwind.config.js # TailwindCSS config
└── package.json # Project dependencies and scripts
```

---

## 💡 Features

- ✅ Create, read, update, and delete tasks
- ✅ Filter tasks by status (`To Do`, `In Progress`, `Done`)
- ✅ Search tasks by title
- ✅ Highlight **overdue tasks** with a red warning badge
- ✅ Light/Dark mode toggle
- ✅ Responsive and accessible UI
- ✅ Clean modular component structure using React

---

## 💡 Bonus Feature

- ✅ Light/Dark mode toggle
- ✅ Responsive and accessible UI

---

## 🛠️ Setup Instructions (Frontend)

### Prerequisites

- Node.js and npm installed (Node.js v18+ recommended)
- Backend API running

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/HamzaSohail-10/task-manager-frontend.git
cd task-manager-frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```
---

### Loom Video Link
https://www.loom.com/share/4e47b1c7dd434fabb5cda15fcc25f7bb?sid=b9059327-a1d3-4b71-962f-1da445bba041
