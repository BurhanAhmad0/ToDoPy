import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

import NotFound from '../assets/icons/notFound.jpg'

const NotFound = () => {

  const navigate = useNavigate()
  const { user, Loading } = useAuth();

  return (
    <section className='not-found w-full h-screen flex flex-col items-center justify-center'>
      <img className='w-96' loading='lazy' src={NotFound} alt="" />
      <button onClick={()=>navigate(`/${user?.firstName.toLowerCase()}`)} className='bg-[#59e4a8] w-52 py-4 rounded-lg mt-5 hover:bg-[#59e4a8]/80 cursor-pointer transition-all duration-300'>Go Back Home</button>
    </section>
  )
}

export default NotFound
