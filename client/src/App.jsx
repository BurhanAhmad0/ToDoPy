import React, { Suspense } from "react";
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from "./components/ProtectedRoutes";
import HomeSkeleton from "./components/HomeSkeleton";

// Lazy-loaded layouts
const AuthLayout = React.lazy(() => import('./layouts/AuthLayout.jsx'));
const MainLayout = React.lazy(() => import('./layouts/MainLayout.jsx'));

// Lazy-loaded pages
const LandingPage = React.lazy(() => import('./pages/LandingPage.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const SignUp = React.lazy(() => import('./pages/SignUp.jsx'));
const Home = React.lazy(() => import('./pages/Home.jsx'));
const Tasks = React.lazy(() => import('./pages/Tasks.jsx'));
const Upcoming = React.lazy(() => import('./pages/Upcoming.jsx'));
const ListPage = React.lazy(() => import('./pages/ListPage.jsx'));
const Calender = React.lazy(() => import('./pages/Calender.jsx'));
const NotFound = React.lazy(() => import('./pages/NotFound.jsx'));

const App = () => {

  return (
    <>
      <Suspense fallback={<HomeSkeleton />}>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<LandingPage />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/:username" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='upcoming' element={<Upcoming />} />
              <Route path='calender' element={<Calender />} />
              <Route path='tasks' element={<Tasks />} />
              <Route path='list/:id' element={<ListPage />} />
            </Route>
          </Route>

          <Route path='*' element={<NotFound />} />

        </Routes>
      </Suspense>
    </>
  )
}

export default App
