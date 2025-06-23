import React, { useState, useReducer, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ListReducer } from '../reducers/ListReducer.jsx'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext.jsx'

import CreateListModal from './CreateListModal.jsx'

const Sidebar = ({ ExpandSidebar, setExpandSidebar, IsModbileSideberOpen, setIsMobileSideberOpen }) => {

  const location = useLocation();
  const navigate = useNavigate();
  const { user, Loading } = useAuth();


  const [Lists, dispatch] = useReducer(ListReducer, []);
  const [IsSideberOpen, setIsSideberOpen] = useState(false)
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
    console.log(e.target.value);
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
    } catch (error) {
      console.error("Failed to logout:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/list`, {
          withCredentials: true // Ensure cookies are sent with the request
        });
        if (response.data.success) {
          dispatch({ type: 'SET_LISTS', lists: response.data.lists });
        } else {
          toast.error(response.data.message);
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
      <aside className={`hidden lg:block lg:${ExpandSidebar ? 'w-1/4' : 'w-28'} rounded-4xl bg-sidebar-background p-8 transition-all duration-300`}>
        <div className="head flex justify-between">
          <h2 className={`text-2xl font-extrabold ${ExpandSidebar ? 'block' : 'hidden'} transition-all duration-300`}><Link to={`/${user?.firstName.toLowerCase()}`}>Menu</Link></h2>
          <img onClick={() => setExpandSidebar(!ExpandSidebar)} className='invert-100 cursor-pointer' loading='lazy' src="../../public/assets/hamburger.svg" alt="" />
        </div>

        <div className={`search relative ${ExpandSidebar ? 'block' : 'hidden'}`}>
          <input className='bg-search-background w-full rounded-4xl px-10 py-2 mt-3 outline-none focus:ring-offset-0 focus:ring-2 focus:ring-green-400 transition-all' placeholder='Search...' type="search" />
          <img className='absolute left-2 top-5' loading='lazy' src="../../public/assets/search.svg" alt="" />
        </div>

        <div className="tasks mt-7 h-56">
          <h2 className={`text-lg font-extrabold ${ExpandSidebar ? 'block' : 'hidden'} transition-all duration-300`}>Tasks</h2>

          <Link to={`/${user?.firstName.toLowerCase()}/upcoming`} className={` ${ExpandSidebar ? 'flex' : 'hidden'} gap-2 mt-3 cursor-pointer transition-all duration-300 ${(location.pathname === `/${user?.firstName.toLowerCase()}/upcoming`) && 'bg-black/10 p-2 rounded-lg'}`}><img loading='lazy' src="../../public/assets/upcoming.svg" alt="" /> Upcoming </Link>
          <Link to={`/${user?.firstName.toLowerCase()}/tasks`} className={` ${ExpandSidebar ? 'flex' : 'hidden'} gap-2 mt-3 cursor-pointer transition-all duration-300 ${(location.pathname === `/${user?.firstName.toLowerCase()}/tasks`) && 'bg-black/10 p-2 rounded-lg'}`}><img loading='lazy' src="../../public/assets/tasks.svg" alt="" /> Tasks </Link>
          <Link to={`/${user?.firstName.toLowerCase()}/calender`} className={` ${ExpandSidebar ? 'flex' : 'hidden'} gap-2 mt-3 cursor-pointer transition-all duration-300 ${(location.pathname === `/${user?.firstName.toLowerCase()}/calender`) && 'bg-black/10 p-2 rounded-lg'}`}><img loading='lazy' src="../../public/assets/calender.svg" alt="" /> Calender </Link>
          <Link to={`/${user?.firstName.toLowerCase()}/notes`} className={` ${ExpandSidebar ? 'flex' : 'hidden'} gap-2 mt-3 cursor-pointer transition-all duration-300 ${(location.pathname === `/${user?.firstName.toLowerCase()}/notes`) && 'bg-black/10 p-2 rounded-lg'}`}><img loading='lazy' src="../../public/assets/stickyNote.svg" alt="" /> Sticky Notes </Link>

          <Link to={`/${user?.firstName.toLowerCase()}/upcoming`} className={` ${ExpandSidebar ? 'hidden' : 'flex'} gap-2 mt-3 cursor-pointer transition-all duration-300 ${(location.pathname === `/${user?.firstName.toLowerCase()}/upcoming`) && 'bg-black/10 p-2 rounded-lg'}`}><img loading='lazy' src="../../public/assets/upcoming.svg" alt="" /> </Link>
          <Link to={`/${user?.firstName.toLowerCase()}/tasks`} className={` ${ExpandSidebar ? 'hidden' : 'flex'} gap-2 mt-3 cursor-pointer transition-all duration-300 ${(location.pathname === `/${user?.firstName.toLowerCase()}/tasks`) && 'bg-black/10 p-2 rounded-lg'}`}><img loading='lazy' src="../../public/assets/tasks.svg" alt="" /> </Link>
          <Link to={`/${user?.firstName.toLowerCase()}/calender`} className={` ${ExpandSidebar ? 'hidden' : 'flex'} gap-2 mt-3 cursor-pointer transition-all duration-300 ${(location.pathname === `/${user?.firstName.toLowerCase()}/calender`) && 'bg-black/10 p-2 rounded-lg'}`}><img loading='lazy' src="../../public/assets/calender.svg" alt="" /> </Link>
          <Link to={`/${user?.firstName.toLowerCase()}/notes`} className={` ${ExpandSidebar ? 'hidden' : 'flex'} gap-2 mt-3 cursor-pointer transition-all duration-300 ${(location.pathname === `/${user?.firstName.toLowerCase()}/notes`) && 'bg-black/10 p-2 rounded-lg'}`}><img loading='lazy' src="../../public/assets/stickyNote.svg" alt="" /> </Link>

        </div>

        <div className="lists h-56 overscroll-auto">
          <h2 className={`text-lg font-extrabold ${ExpandSidebar ? 'block' : 'hidden'} transition-all duration-300`}>Lists</h2>

          <div className="listsCards h-36 overflow-y-auto">
            {(ExpandSidebar) && (
              !Lists.length ? (
                <p className='text-center text-gray-500 mt-5'>No lists found. Create a new list to get started.</p>
              ) : (
                Lists.map((list) => (
                  <Link to={`/${user?.firstName.toLowerCase()}/list/${list._id}`} key={list._id} className='flex gap-2 mt-3 cursor-pointer'>
                    <div className={`w-5 h-5 rounded-full ${list.color}`}></div>
                    {list.title}
                  </Link>
                ))
              )
            )}

            {(!ExpandSidebar) && Lists.map((list) => (
              <Link to={`/${user?.firstName.toLowerCase()}/list/${list._id}`} key={list.id} className='flex gap-2 mt-3 cursor-pointer'>
                <div className={`w-5 h-5 rounded-full ${list.color}`}></div>
              </Link>
            ))}
          </div>

          <button title='Create List' onClick={() => setCreateListModal(true)} className={`flex gap-2 mt-3 cursor-pointer ${ExpandSidebar ? 'block' : 'hidden'} transition-all duration-300`}> <img loading='lazy' src="../../public/assets/add.svg" alt="" /> Add New List</button>
          <button title='Create List' onClick={() => setCreateListModal(true)} className={`flex gap-2 mt-3 cursor-pointer ${ExpandSidebar ? 'hidden' : 'block'} transition-all duration-300`}> <img loading='lazy' src="../../public/assets/add.svg" alt="" /> </button>

        </div>

        <div className="btns mt-7">
          <button className={`${(ExpandSidebar) ? 'flex' : 'hidden'} gap-2 mt-3 cursor-pointer`}> <img loading='lazy' src="../../public/assets/settings.svg" alt="" /> Settings</button>
          <button title='sign out' onClick={() => handleLogout()} className={`${(ExpandSidebar) ? 'flex' : 'hidden'} gap-2 mt-3 cursor-pointer`}> <img loading='lazy' src="../../public/assets/signout.svg" alt="" /> Sign out</button>

          <button className={`${(ExpandSidebar) ? 'hidden' : 'flex'} gap-2 mt-3 cursor-pointer`}> <img loading='lazy' src="../../public/assets/settings.svg" alt="" /> </button>
          <button title='sign out' onClick={() => handleLogout()} className={`${(ExpandSidebar) ? 'hidden' : 'flex'} gap-2 mt-3 cursor-pointer`}> <img loading='lazy' src="../../public/assets/signout.svg" alt="" /> </button>
        </div>

        {createListModal && (
          <CreateListModal
            setCreateListModal={setCreateListModal}
            handleListTitleChange={handleListTitleChange}
            createList={createList} />
        )}
      </aside>

      <aside className={`block lg:hidden w-full xsm:w-1/2 ${(IsModbileSideberOpen) ? 'translate-x-0' : '-translate-x-full'} h-full sm:h-screen absolute top-0 left-0 z-10 bg-sidebar-background p-3 transition-all duration-300 block lg:hidden`}>

        <div className="head flex justify-between">
          <h2 className={`text-2xl font-extrabold block transition-all duration-300`}><Link to={`/${user?.firstName.toLowerCase()}`}>Menu</Link></h2>
          <img onClick={() => setIsMobileSideberOpen(false)} className='invert-100 cursor-pointer' loading='lazy' src="../../public/assets/hamburger.svg" alt="" />
        </div>

        <div className={`search relative block`}>
          <input className='bg-search-background w-full rounded-4xl px-10 py-2 mt-3 outline-none focus:ring-offset-0 focus:ring-2 focus:ring-green-400 transition-all' placeholder='Search...' type="search" />
          <img className='absolute left-2 top-5' loading='lazy' src="../../public/assets/search.svg" alt="" />
        </div>

        <div className="tasks mt-7 h-56">
          <h2 className={`text-lg font-extrabold block transition-all duration-300`}>Tasks</h2>

          <Link to={`/${user?.firstName.toLowerCase()}/upcoming`} className={`flex gap-2 mt-3 cursor-pointer transition-all duration-300 ${(location.pathname === `/${user?.firstName.toLowerCase()}/upcoming`) && 'bg-black/10 p-2 rounded-lg'}`}><img loading='lazy' src="../../public/assets/upcoming.svg" alt="" /> Upcoming </Link>
          <Link to={`/${user?.firstName.toLowerCase()}/tasks`} className={`flex gap-2 mt-3 cursor-pointer transition-all duration-300 ${(location.pathname === `/${user?.firstName.toLowerCase()}/tasks`) && 'bg-black/10 p-2 rounded-lg'}`}><img loading='lazy' src="../../public/assets/tasks.svg" alt="" /> Tasks </Link>
          <Link to={`/${user?.firstName.toLowerCase()}/calender`} className={`flex gap-2 mt-3 cursor-pointer transition-all duration-300 ${(location.pathname === `/${user?.firstName.toLowerCase()}/calender`) && 'bg-black/10 p-2 rounded-lg'}`}><img loading='lazy' src="../../public/assets/calender.svg" alt="" /> Calender </Link>
          <Link to={`/${user?.firstName.toLowerCase()}/notes`} className={`flex gap-2 mt-3 cursor-pointer transition-all duration-300 ${(location.pathname === `/${user?.firstName.toLowerCase()}/notes`) && 'bg-black/10 p-2 rounded-lg'}`}><img loading='lazy' src="../../public/assets/stickyNote.svg" alt="" /> Sticky Notes </Link>

        </div>

        <div className="lists h-56 overscroll-auto">
          <h2 className={`text-lg font-extrabold block transition-all duration-300`}>Lists</h2>

          <div className="listsCards h-36 overflow-y-auto">
            {!Lists.length ? (
              <p className='text-center text-gray-500 mt-5'>No lists found. Create a new list to get started.</p>
            ) : (
              Lists.map((list) => (
                <Link to={`/${user?.firstName.toLowerCase()}/list/${list._id}`} key={list._id} className='flex gap-2 mt-3 cursor-pointer'>
                  <div className={`w-5 h-5 rounded-full ${list.color}`}></div>
                  {list.title}
                </Link>
              ))
            )}
          </div>

          <button title='Create List' onClick={() => setCreateListModal(true)} className={`flex gap-2 mt-3 cursor-pointer transition-all duration-300`}> <img loading='lazy' src="../../public/assets/add.svg" alt="" /> Add New List</button>

        </div>

        <div className="btns mt-7">
          <button className={`flex gap-2 mt-3 cursor-pointer`}> <img loading='lazy' src="../../public/assets/settings.svg" alt="" /> Settings</button>
          <button title='sign out' onClick={() => handleLogout()} className={`flex gap-2 mt-3 cursor-pointer`}> <img loading='lazy' src="../../public/assets/signout.svg" alt="" /> Sign out</button>
        </div>

        {createListModal && (
          <CreateListModal
            setCreateListModal={setCreateListModal}
            handleListTitleChange={handleListTitleChange}
            createList={createList} />
        )}
      </aside>

    </>
  )
}

export default Sidebar
