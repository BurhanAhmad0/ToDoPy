import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import HomeSkeleton from './HomeSkeleton.jsx'

const ProtectedRoutes = () => {
    const { user, Loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!Loading && !user) {
            navigate('/login');
        }
    }, [Loading, user, navigate]);

    return (
        <>
            {Loading ? (
                <HomeSkeleton />
            ) : (
                <div>
                    <Outlet />
                </div>
            )}
        </>
    )
}

export default ProtectedRoutes
