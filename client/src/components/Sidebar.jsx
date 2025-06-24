import React, { useState, useReducer, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ListReducer } from '../reducers/ListReducer.jsx'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext.jsx'

// 🔁 Fixed Icon Imports
import HamburgerIcon from '../assets/icons/hamburger.svg'
import SearchIcon from '../assets/icons/search.svg'
import UpcomingIcon from '../assets/icons/upcoming.svg'
import TasksIcon from '../assets/icons/tasks.svg'
import CalenderIcon from '../assets/icons/calender.svg'
import StickyNoteIcon from '../assets/icons/stickyNote.svg'
import AddIcon from '../assets/icons/add.svg'
import SettingsIcon from '../assets/icons/settings.svg'
import DarkIcon from '../assets/icons/darkMode.svg'
import LightIcon from '../assets/icons/lightMode.svg'
import SignoutIcon from '../assets/icons/signout.svg'

// Component...
import CreateListModal from './CreateListModal.jsx'

const Sidebar = ({ ExpandSidebar, setExpandSidebar, IsModbileSideberOpen, setIsMobileSideberOpen }) => {

  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser, Loading } = useAuth();


  const [Lists, dispatch] = useReducer(ListReducer, []);
  const [createListModal, setCreateListModal] = useState(false);
  const [ListTitleInput, setListTitleInput] = useState({
    ListTitle: '',
    color: 'bg-green-400'
  });

  const handleListTitleChange = (e) => {
    setListTitleInput({
      ...ListTitleInput,
      [e.target.name]: e.target.value
    });
  }

  const createList = async () => {
    try {
      if (ListTitleInput.ListTitle.trim() === '') {
        alert('Please enter a list title');
        return;
      }

      const newList = {
        title: ListTitleInput.ListTitle,
        color: ListTitleInput.color
      };

      // Dispatch the new list to the reducer
      dispatch({ type: 'ADD_LIST', list: newList });

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/list`, newList, {
        withCredentials: true // Ensure cookies are sent with the request
      });
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }

      setCreateListModal(false);
      setListTitleInput({ ListTitle: '', color: 'bg-green-400' });
    } catch (error) {
      console.error("Error creating list:", error);
    }
  }

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`, {}, {
        withCredentials: true // Ensure cookies are sent with the request
      });
      navigate('/login')
      toast.success(response.data.message);
      setUser(null)
    } catch (error) {
      console.error("Failed to logout:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  function handleColorThemeMode() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark");
    } else {
      //remove class=dark in html element
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/list`, {
          withCredentials: true // Ensure cookies are sent with the request
        });
        if (response.data.success) {
          dispatch({ type: 'SET_LISTS', lists: response.data.lists });
        }
      } catch (error) {
        console.error("Error fetching lists:", error);
        toast.error("Failed to fetch lists. Please try again.");
      }
    }

    fetchLists();
  }, []);

  return (
    <>
      <aside className={`hidden lg:block lg:${ExpandSidebar ? 'w-1/4' : 'w-28'} rounded-4xl bg-sidebar-background dark:bg-green-900 p-8 transition-all duration-300 text-black dark:text-white`}>
        <div className="head flex justify-between">
          <h2 className={`text-2xl font-extrabold ${ExpandSidebar ? 'block' : 'hidden'} transition-all duration-300`}>
            <Link to={`/${user?.firstName.toLowerCase()}`}>Menu</Link>
          </h2>
          <img onClick={() => setExpandSidebar(!ExpandSidebar)} className='invert-100  dark:invert-0 cursor-pointer' loading='lazy' src={HamburgerIcon} alt="" />
        </div>

        <div className={`search relative ${ExpandSidebar ? 'block' : 'hidden'}`}>
          <input
            className='bg-search-background dark:bg-green-800 dark:text-white w-full rounded-4xl px-10 py-2 mt-3 outline-none focus:ring-offset-0 focus:ring-2 focus:ring-green-400 transition-all placeholder-gray-400 dark:placeholder-white'
            placeholder='Search...'
            type="search"
          />
          <img className='absolute left-2 top-5 dark:invert-100' loading='lazy' src={SearchIcon} alt="" />
        </div>

        <div className="tasks mt-7 h-56">
          <h2 className={`text-lg font-extrabold ${ExpandSidebar ? 'block' : 'hidden'} transition-all duration-300`}>Tasks</h2>

          {/* Expanded Links */}
          {ExpandSidebar && (
            <>
              <Link to={`/${user?.firstName.toLowerCase()}/upcoming`} className={`flex gap-2 mt-3 cursor-pointer transition-all duration-300 ${location.pathname.includes("/upcoming") && 'bg-black/10 dark:bg-white/10 p-2 rounded-lg'}`}>
                <img className='dark:invert-100' loading='lazy' src={UpcomingIcon} alt="" /> Upcoming
              </Link>
              <Link to={`/${user?.firstName.toLowerCase()}/tasks`} className={`flex gap-2 mt-3 cursor-pointer transition-all duration-300 ${location.pathname.includes("/tasks") && 'bg-black/10 dark:bg-white/10 p-2 rounded-lg'}`}>
                <img className='dark:invert-100' loading='lazy' src={TasksIcon} alt="" /> Tasks
              </Link>
              <Link to={`/${user?.firstName.toLowerCase()}/calender`} className={`flex gap-2 mt-3 cursor-pointer transition-all duration-300 ${location.pathname.includes("/calender") && 'bg-black/10 dark:bg-white/10 p-2 rounded-lg'}`}>
                <img className='dark:invert-100' loading='lazy' src={CalenderIcon} alt="" /> Calender
              </Link>
              <Link to={`/${user?.firstName.toLowerCase()}/notes`} className={`flex gap-2 mt-3 cursor-pointer transition-all duration-300 ${location.pathname.includes("/notes") && 'bg-black/10 dark:bg-white/10 p-2 rounded-lg'}`}>
                <img className='dark:invert-100' loading='lazy' src={StickyNoteIcon} alt="" /> Sticky Notes
              </Link>
            </>
          )}

          {/* Collapsed Icons */}
          {!ExpandSidebar && (
            <>
              <Link to={`/${user?.firstName.toLowerCase()}/upcoming`} className={`flex gap-2 mt-3 cursor-pointer transition-all duration-300 ${location.pathname.includes("/upcoming") && 'bg-black/10 dark:bg-white/10 p-2 rounded-lg'}`}>
                <img className='dark:invert-100' loading='lazy' src={UpcomingIcon} alt="" />
              </Link>
              <Link to={`/${user?.firstName.toLowerCase()}/tasks`} className={`flex gap-2 mt-3 cursor-pointer transition-all duration-300 ${location.pathname.includes("/tasks") && 'bg-black/10 dark:bg-white/10 p-2 rounded-lg'}`}>
                <img className='dark:invert-100' loading='lazy' src={TasksIcon} alt="" />
              </Link>
              <Link to={`/${user?.firstName.toLowerCase()}/calender`} className={`flex gap-2 mt-3 cursor-pointer transition-all duration-300 ${location.pathname.includes("/calender") && 'bg-black/10 dark:bg-white/10 p-2 rounded-lg'}`}>
                <img className='dark:invert-100' loading='lazy' src={CalenderIcon} alt="" />
              </Link>
              <Link to={`/${user?.firstName.toLowerCase()}/notes`} className={`flex gap-2 mt-3 cursor-pointer transition-all duration-300 ${location.pathname.includes("/notes") && 'bg-black/10 dark:bg-white/10 p-2 rounded-lg'}`}>
                <img className='dark:invert-100' loading='lazy' src={StickyNoteIcon} alt="" />
              </Link>
            </>
          )}
        </div>

        {/* Lists Section */}
        <div className="lists h-56">
          <h2 className={`text-lg font-extrabold ${ExpandSidebar ? 'block' : 'hidden'} transition-all duration-300`}>Lists</h2>
          <div className="listsCards h-36 overflow-y-auto">
            {ExpandSidebar ? (
              !Lists.length ? (
                <p className='text-center text-gray-500 dark:text-gray-400 mt-5'>No lists found. Create a new list to get started.</p>
              ) : (
                Lists.map((list) => (
                  <Link to={`/${user?.firstName.toLowerCase()}/list/${list._id}`} key={list._id} className='flex gap-2 mt-3 cursor-pointer'>
                    <div className={`w-5 h-5 rounded-full ${list.color}`}></div>
                    {list.title}
                  </Link>
                ))
              )
            ) : (
              Lists.map((list) => (
                <Link to={`/${user?.firstName.toLowerCase()}/list/${list._id}`} key={list._id} className='flex gap-2 mt-3 cursor-pointer'>
                  <div className={`w-5 h-5 rounded-full ${list.color}`}></div>
                </Link>
              ))
            )}
          </div>

          <button onClick={() => setCreateListModal(true)} className={`flex gap-2 mt-3 cursor-pointer ${ExpandSidebar ? 'block' : 'hidden'} transition-all duration-300`}>
            <img className='dark:invert-100' loading='lazy' src={AddIcon} alt="" /> Add New List
          </button>
          <button onClick={() => setCreateListModal(true)} className={`flex gap-2 mt-3 cursor-pointer ${ExpandSidebar ? 'hidden' : 'block'} transition-all duration-300`}>
            <img className='dark:invert-100' loading='lazy' src={AddIcon} alt="" />
          </button>
        </div>

        {/* Footer Buttons */}
        <div className="btns mt-7">
          {/* Expanded Buttons */}
          {ExpandSidebar && (
            <>
              <button className="flex gap-2 mt-3 cursor-pointer"><img className='dark:invert-100' loading='lazy' src={SettingsIcon} alt="" /> Settings</button>
              <button onClick={handleLogout} className="flex gap-2 mt-3 cursor-pointer"><img className='dark:invert-100' loading='lazy' src={SignoutIcon} alt="" /> Sign out</button>
              <button onClick={handleColorThemeMode} className="flex gap-2 mt-3 cursor-pointer dark:hidden"><img className='invert-100' loading='lazy' src={DarkIcon} alt="" /> Dark Mode</button>
              <button onClick={handleColorThemeMode} className="hidden dark:flex gap-2 mt-3 cursor-pointer"><img loading='lazy' src={LightIcon} alt="" /> Light Mode</button>
            </>
          )}

          {/* Collapsed Buttons */}
          {!ExpandSidebar && (
            <>
              <button className="flex gap-2 mt-3 cursor-pointer"><img className='dark:invert-100' loading='lazy' src={SettingsIcon} alt="" /></button>
              <button onClick={handleLogout} className="flex gap-2 mt-3 cursor-pointer"><img className='dark:invert-100' loading='lazy' src={SignoutIcon} alt="" /></button>
              <button onClick={handleColorThemeMode} className="flex gap-2 mt-3 cursor-pointer dark:hidden"><img className='invert-100' loading='lazy' src={DarkIcon} alt="" /></button>
              <button onClick={handleColorThemeMode} className="hidden dark:flex gap-2 mt-3 cursor-pointer"><img loading='lazy' src={LightIcon} alt="" /></button>
            </>
          )}
        </div>

        {createListModal && (
          <CreateListModal
            setCreateListModal={setCreateListModal}
            handleListTitleChange={handleListTitleChange}
            createList={createList}
          />
        )}
      </aside>

      <aside className={`block lg:hidden w-full xsm:w-1/2 ${IsModbileSideberOpen ? 'translate-x-0' : '-translate-x-full'} h-full sm:h-screen absolute top-0 left-0 z-10 bg-sidebar-background dark:bg-green-900 text-black dark:text-white p-3 transition-all duration-300`}>

        {/* Header */}
        <div className="head flex justify-between items-center">
          <h2 className="text-2xl font-extrabold">
            <Link to={`/${user?.firstName.toLowerCase()}`}>Menu</Link>
          </h2>
          <img onClick={() => setIsMobileSideberOpen(false)} className="cursor-pointer filter dark:invert-0" loading="lazy" src={HamburgerIcon} alt="Close menu" />
        </div>

        {/* Search Bar */}
        <div className="search relative mt-4">
          <input
            className="bg-search-background dark:bg-green-800 text-black dark:text-white w-full rounded-4xl px-10 py-2 outline-none focus:ring-offset-0 focus:ring-2 focus:ring-green-400 transition-all"
            placeholder="Search..."
            type="search"
          />
          <img className="absolute left-2 top-3 filter dark:invert" loading="lazy" src={SearchIcon} alt="Search" />
        </div>

        {/* Tasks Navigation */}
        <div className="tasks mt-7">
          <h2 className="text-lg font-extrabold">Tasks</h2>

          <Link to={`/${user?.firstName.toLowerCase()}/upcoming`} className={`flex gap-2 mt-3 items-center transition-all duration-300 ${location.pathname === `/${user?.firstName.toLowerCase()}/upcoming` ? 'bg-black/10 dark:bg-white/10 p-2 rounded-lg' : ''}`}>
            <img className="filter dark:invert" loading="lazy" src={UpcomingIcon} alt="Upcoming" />
            Upcoming
          </Link>

          <Link to={`/${user?.firstName.toLowerCase()}/tasks`} className={`flex gap-2 mt-3 items-center transition-all duration-300 ${location.pathname === `/${user?.firstName.toLowerCase()}/tasks` ? 'bg-black/10 dark:bg-white/10 p-2 rounded-lg' : ''}`}>
            <img className="filter dark:invert" loading="lazy" src={TasksIcon} alt="Tasks" />
            Tasks
          </Link>

          <Link to={`/${user?.firstName.toLowerCase()}/calender`} className={`flex gap-2 mt-3 items-center transition-all duration-300 ${location.pathname === `/${user?.firstName.toLowerCase()}/calender` ? 'bg-black/10 dark:bg-white/10 p-2 rounded-lg' : ''}`}>
            <img className="filter dark:invert" loading="lazy" src={CalenderIcon} alt="Calendar" />
            Calendar
          </Link>

          <Link to={`/${user?.firstName.toLowerCase()}/notes`} className={`flex gap-2 mt-3 items-center transition-all duration-300 ${location.pathname === `/${user?.firstName.toLowerCase()}/notes` ? 'bg-black/10 dark:bg-white/10 p-2 rounded-lg' : ''}`}>
            <img className="filter dark:invert" loading="lazy" src={StickyNoteIcon} alt="Sticky Notes" />
            Sticky Notes
          </Link>
        </div>

        {/* Lists Section */}
        <div className="lists mt-7">
          <h2 className="text-lg font-extrabold">Lists</h2>
          <div className="listsCards h-36 overflow-y-auto mt-2">
            {!Lists.length ? (
              <p className="text-center text-gray-500 dark:text-gray-400 mt-5">No lists found. Create a new list to get started.</p>
            ) : (
              Lists.map((list) => (
                <Link to={`/${user?.firstName.toLowerCase()}/list/${list._id}`} key={list._id} className="flex gap-2 mt-3 items-center">
                  <div className={`w-5 h-5 rounded-full ${list.color}`}></div>
                  {list.title}
                </Link>
              ))
            )}
          </div>

          <button title="Create List" onClick={() => setCreateListModal(true)} className="flex gap-2 mt-3 items-center text-left">
            <img className="filter dark:invert" loading="lazy" src={AddIcon} alt="Add List" />
            Add New List
          </button>
        </div>

        {/* Settings & Signout */}
        <div className="btns mt-7">
          <button className="flex gap-2 mt-3 items-center">
            <img className="filter dark:invert" loading="lazy" src={SettingsIcon} alt="Settings" />
            Settings
          </button>
          <button onClick={() => handleLogout()} className="flex gap-2 mt-3 items-center">
            <img className="filter dark:invert" loading="lazy" src={SignoutIcon} alt="Sign Out" />
            Sign out
          </button>
          <button onClick={handleColorThemeMode} className="flex gap-2 mt-3 cursor-pointer dark:hidden"><img className='invert-100' loading='lazy' src={DarkIcon} alt="" /> Dark Mode</button>
          <button onClick={handleColorThemeMode} className="hidden dark:flex gap-2 mt-3 cursor-pointer"><img loading='lazy' src={LightIcon} alt="" /> Light Mode</button>
        </div>

        {/* Modal */}
        {createListModal && (
          <CreateListModal
            setCreateListModal={setCreateListModal}
            handleListTitleChange={handleListTitleChange}
            createList={createList}
          />
        )}
      </aside>

    </>
  )
}

export default Sidebar
