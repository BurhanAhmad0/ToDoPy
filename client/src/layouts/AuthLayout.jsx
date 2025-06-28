import React from "react";
import { Outlet } from "react-router-dom";

import HeroImageLarge from "../../public/icons/heroImage.webp";
import HeroImageSmall from "../../public/icons/heroImage-small.webp";
import HeroImageMedium from "../../public/icons/heroImage-medium.webp";

const AuthLayout = () => {
  return (
    <>
      <section className="authLayout dark:bg-green-900 dark:text-white min-h-screen flex flex-col lg:flex-row gap-6 p-6 sm:p-10">
        {/* Left Section - Image */}
        <div className="leftSection w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={HeroImageLarge}
            srcSet={`
            ${HeroImageSmall} 480w,
            ${HeroImageMedium} 768w,
            ${HeroImageLarge} 1200w
          `}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Hero Image"
            fetchpriority="high"
            width={1200}
            height={800}
            className="w-full max-w-md md:max-w-lg lg:max-w-full h-auto object-contain"
          />
        </div>

        {/* Right Section - Form/Content */}
        <div className="rightSection w-full lg:w-1/2 rounded-3xl p-6 sm:p-10 md:px-16 lg:px-20 flex items-center justify-center">
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthLayout;
