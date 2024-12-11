# 📝Task Tracker Application (Trello/Jira-like)

This is a simplified version of a task tracker application similar to Trello or Jira, built with Vue.js. The application allows users to manage tasks with different statuses, priorities, and responsible people. It also supports task drag-and-drop functionality between columns (statuses).

## Features

- **Task Management**: Users can create, edit, and delete tasks.
- **Task Fields**: Each task includes the following fields:
  - Title
  - Description
  - Assignee
  - Responsible person
  - Status (TODO, In Progress, Done)
  - Priority
- **Dashboard**: Tasks are organized into columns based on their statuses.
- **Drag-and-Drop**: Tasks can be dragged between columns to change their status.
- **Light/Dark Mode**: The application supports both light and dark themes.
- **Responsive Design**: The app is fully responsive and works on any screen size.

## Technologies Used

- **Vue.js**: Main framework for building the frontend.
- **Vuex**: Global state management.
- **Tailwind CSS**: For styling.
- **Vue Draggable**: For drag-and-drop functionality.

## How to Run the Project

Follow the steps below to run the project locally.

### Prerequisites

Make sure you have the following tools installed on your machine:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-tracker.git
   cd task-tracker
   
2.  Install the required dependencies:
   npm install


3.  Run the application in development mode:  
npm run dev


The app will be available at http://localhost:3000 by default.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
