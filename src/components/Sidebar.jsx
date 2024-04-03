import React, { useState } from "react";
import logo from "../assets/carbon-cell.png";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { menu } from "../constant";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("home");

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="desktop-sidebar hidden md:block">
        <div className="custom-scrollbar w-[16rem] rounded-xl overflow-y-auto h-[98vh]  bg-gradient-to-tr from-[#22222f] from-30% to-[#4E3245]">
          <div className="py-4 mt-4 px-2 flex justify-between items-center">
            <img
              src={logo}
              alt="carbon-cell"
              height={60}
              width={130}
              className="object-contain"
            />

            <AiOutlineMenu size={25} className="text-white cursor-pointer" />
          </div>

          {/* search field */}
          <div className="my-6 mx-2 relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#22222f] py-3 pl-10 rounded-lg placeholder:text-lg border-none outline-none text-white"
            />
            <AiOutlineSearch
              size={20}
              className="text-white cursor-pointer absolute top-3 left-2"
            />
          </div>

          {/* menu links */}
          <ul className="flex flex-col gap-2 my-8">
            {menu.map((menu) => (
              <div
                className={`flex items-center justify-between text-[#ccc] py-2 px-4 text-[1rem] pl-5 duration-200 cursor-pointer`}
                onClick={() => setCurrentMenu(menu.link)}>
                <p
                  className={`flex items-center gap-2.5 text-lg capitalize ${
                    menu.link === currentMenu
                      ? "text-green-400 transition-all duration-150"
                      : ""
                  }`}>
                  {menu.icon} {menu.link}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div className="mobile-sidebar relative md:hidden">
        <button onClick={handleToggleSidebar} className="sidebar-toggle-button">
          {isSidebarOpen ? (
            <AiOutlineClose size={25} className="text-white" />
          ) : (
            <AiOutlineMenu size={25} className="text-white" />
          )}
        </button>
        <div
          className={`sidebar-overlay z-20 ${isSidebarOpen ? "active" : ""}`}>
          <div className="custom-scrollbar py-6 w-[16rem] overflow-y-auto h-full md:h-[95%]  bg-gradient-to-tr from-[#22222f] from-30% to-[#4E3245]">
            <div className="logo px-2">
              <img
                src={logo}
                alt="carbon-cell"
                height={60}
                width={130}
                className="object-contain"
              />
            </div>
            <ul className="flex flex-col gap-2 my-8 px-2">
              {menu.map((menu) => (
                <div
                  className={`flex items-center justify-between text-[#ccc] py-2 px-4 text-[1rem] pl-2 duration-200 cursor-pointer`}
                  onClick={() => setCurrentMenu(menu.link)}>
                  <p
                    className={`flex items-center gap-2.5 text-lg capitalize ${
                      menu.link === currentMenu
                        ? "text-green-400 transition-all duration-150"
                        : ""
                    }`}>
                    {menu.icon} {menu.link}
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
