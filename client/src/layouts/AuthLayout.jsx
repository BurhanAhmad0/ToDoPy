import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <section className="authLayout bgImage flex items-center lg:items-start p-6 sm:p-10 bg-primary-background gap-5 min-h-screen">
            {/* Left Section - Image */}
            <div className="leftSection w-full md:w-1/2 hidden lg:flex items-center justify-center">
                <img
                    loading="lazy"
                    src="../src/assets/icons/heroImage.png"
                    alt="Hero"
                    className="w-full h-auto object-contain max-h-[400px] md:max-h-full"
                />
            </div>

            {/* Right Section - Form/Content */}
            <div className="rightSection w-full lg:w-1/2 bg-secondary-background rounded-3xl flex items-center justify-center p-6 sm:p-10 md:px-16 lg:px-28">
                <Outlet />
            </div>
        </section>
    )
}

export default AuthLayout
