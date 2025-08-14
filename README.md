# 📝 ToDoPy

A modern fullstack To-Do & productivity app built with React, Node.js, and MongoDB. 🔒 Features user authentication, ✅ task management, 📱 responsive design, and a clean, intuitive UI. 🚀

<p align="end">
  <img src="https://img.shields.io/badge/Stack-Fullstack-green?style=flat-square"/>
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square"/>
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square"/>
</p>

<p align="center">
  <img src="https://em-content.zobj.net/source/microsoft-teams/363/rocket_1f680.png" alt="Rocket" width="48" />
  <img src="https://em-content.zobj.net/source/microsoft-teams/363/sparkles_2728.png" alt="Sparkles" width="48" />
  <img src="https://em-content.zobj.net/source/microsoft-teams/363/handshake_1f91d.png" alt="Handshake" width="48" />
  <img src="https://em-content.zobj.net/source/microsoft-teams/363/heart-hands_1faf6.png" alt="Heart Hands" width="48" />
</p>

---

## 🚀 Features

- ✅ Add, edit, and delete tasks
- 📌 Mark tasks as complete or incomplete
- 🔒 User authentication (JWT, protected routes)
- 🧠 Persistent data using MongoDB
- 📡 RESTful API integration
- 🌐 Client-side routing with React Router
- 📱 Fully responsive & modern UI
- 🌙 Dark mode
- 🗂️ Task lists & categories
- 🔔 Reminders & due dates (planned)
- ⚡ Fast Vite-powered frontend

---

## 🛠️ Tech Stack

### 🖥️ Frontend

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- CSS Modules

### 🗄️ Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv), [cors](https://www.npmjs.com/package/cors)

---

## 📦 Installation

Follow the steps below to run **ToDoPy** locally.

### 🔧 Prerequisites

- Node.js & npm
- MongoDB installed and running
- Git (optional)

### 📁 Clone the Repository

```bash
git clone https://github.com/BurhanAhmad0/ToDoPy.git
cd ToDoPy
```

---

### 🧩 Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todopy
```

Start the server:

```bash
npm run dev
```

---

### 🎨 Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

The React app should be available at `http://localhost:5173` (default Vite port).

---

## 🧭 Folder Structure

```bash
ToDoPy/
├── client/         # React frontend (Vite)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── layouts/
│       ├── pages/
│       ├── reducers/
│       ├── assets/
│       └── App.jsx
├── server/         # Express backend
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── server.js
├── .github/
├── README.md
└── ...
```

---

## 📡 API Endpoints (Example)

**Base URL:** `/api/todo`

| Method | Endpoint | Description         |
| ------ | -------- | ------------------- |
| GET    | `/`      | Fetch all todos     |
| POST   | `/`      | Create a new todo   |
| PUT    | `/:id`   | Update a todo by ID |
| DELETE | `/:id`   | Delete a todo by ID |

---

## ✨ Future Improvements

- ⏰ Due dates & reminders
- 📊 Task categories and filters
- 🌙 Dark mode toggle
- 📱 PWA (Progressive Web App) support
- 🧩 Integrations (Google Calendar, etc.)

---

## 👨‍💻 Author

**Burhan Ahmad**  
[GitHub](https://github.com/BurhanAhmad0) · [LinkedIn](https://linkedin.com/in/burhan-developer)

Feel free to connect or contribute!

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

---

## 🏷️ Topics

todo • productivity • task-manager • react • nodejs • express • mongodb • fullstack • webapp • vite • authentication • jwt • context-api • hooks • modern-ui • responsive-design • pwa • vercel • project-management • open-source

---

<p align="center">
  <img src="https://em-content.zobj.net/source/microsoft-teams/363/rocket_1f680.png" alt="Rocket" width="40" />
  <img src="https://em-content.zobj.net/source/microsoft-teams/363/sparkles_2728.png" alt="Sparkles" width="40" />
  <img src="https://em-content.zobj.net/source/microsoft-teams/363/handshake_1f91d.png" alt="Handshake" width="40" />
  <img src="https://em-content.zobj.net/source/microsoft-teams/363/heart-hands_1faf6.png" alt="Heart Hands" width="40" />
</p>

> Built with ❤️ by Burhan Ahmad using the modern fullstack ecosystem
