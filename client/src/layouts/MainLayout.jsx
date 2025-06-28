import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import HamburgerIcon from "../assets/icons/hamburger.svg";

import Sidebar from "../components/Sidebar.jsx";

const MainLayout = () => {
  const [ExpandSidebar, setExpandSidebar] = useState(true);
  const [IsModbileSideberOpen, setIsMobileSideberOpen] = useState(false);

  return (
    <section className="relative lg:p-10 flex gap-5 w-full dark:bg-btn">
      {!IsModbileSideberOpen && (
        <img
          onClick={() => setIsMobileSideberOpen(true)}
          className="cursor-pointer absolute top-4 left-4 block lg:hidden"
          loading="lazy"
          src={HamburgerIcon}
          alt="Hamburger Icon"
        />
      )}
      <Sidebar
        ExpandSidebar={ExpandSidebar}
        setExpandSidebar={setExpandSidebar}
        IsModbileSideberOpen={IsModbileSideberOpen}
        setIsMobileSideberOpen={setIsMobileSideberOpen}
      />
      <div
        className={`mainContent w-full lg:${
          ExpandSidebar ? "w-3/4" : "w-11/12"
        } transition-all duration-300`}
      >
        <Outlet />
      </div>
    </section>
  );
};

export default MainLayout;
