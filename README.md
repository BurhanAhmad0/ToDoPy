<h1 align="center">📝 ToDoPy</h1>

<p align="center">
  <strong>A full-featured MERN stack To-Do app using React Router, MongoDB, Mongoose, and Express.js.</strong><br/>
  Efficiently manage your daily tasks with a clean UI and robust backend.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Stack-MERN-green?style=flat-square"/>
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square"/>
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square"/>
</p>

---

## 🚀 Features

- ✅ Add, edit, and delete tasks
- 📌 Mark tasks as complete or incomplete
- 🧠 Persistent data using MongoDB
- 📡 RESTful API integration
- 🌐 Client-side routing with React Router
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

### 🖥️ Frontend

- [React.js](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- CSS (or Tailwind/Bootstrap, if applicable)

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
git clone https://github.com/yourusername/todopy.git
cd todopy
````

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
npm start
```

The React app should be available at `http://localhost:3000`.

---

## 🧭 Folder Structure

```bash
todopy/
├── client/         # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
├── server/         # Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
└── README.md
```

---

## 📡 API Endpoints

**Base URL:** `/api/todos`

| Method | Endpoint | Description         |
| ------ | -------- | ------------------- |
| GET    | `/`      | Fetch all todos     |
| POST   | `/`      | Create a new todo   |
| PUT    | `/:id`   | Update a todo by ID |
| DELETE | `/:id`   | Delete a todo by ID |

---

## ✨ Future Improvements

* 🔐 User authentication with JWT
* ⏰ Due dates & reminders
* 📊 Task categories and filters
* 🌙 Dark mode toggle
* 📱 PWA (Progressive Web App) support

---

## 👨‍💻 Author

**Burhan Ahmad**
[GitHub](https://github.com/BurhanAhmad0) · [LinkedIn](https://linkedin.com/in/burhan-ahmad-developer)
Feel free to connect or contribute!

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

> Built with ❤️ using the MERN Stack
