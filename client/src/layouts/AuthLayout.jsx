import React from 'react'
import { Outlet } from 'react-router-dom'

import HeroImage from '../assets/icons/heroImage.png'

const AuthLayout = () => {
    return (
        <section className="authLayout bgImage bg-primary-background dark:bg-black min-h-screen flex flex-col lg:flex-row gap-6 p-6 sm:p-10">
            {/* Left Section - Image */}
            <div className="leftSection w-full lg:w-1/2 hidden lg:flex justify-center items-center">
                <img
                    loading="lazy"
                    src={HeroImage}
                    alt="Hero"
                    className="w-full max-w-md md:max-w-lg lg:max-w-full h-auto object-contain"
                />
            </div>

            {/* Right Section - Form/Content */}
            <div className="rightSection w-full lg:w-1/2 bg-secondary-background rounded-3xl p-6 sm:p-10 md:px-16 lg:px-20 flex items-center justify-center">
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}

export default AuthLayout
