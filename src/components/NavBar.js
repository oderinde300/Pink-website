import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const menuItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "services",
      path: "/services",
    },
    {
      title: "contact",
      path: "/contact",
    },
    {
      title: "Repayment calculator",
      path: "/repayment-calculator",
    },
    {
      title: "financial Solutions",
      path: "/financial-solutions",
    },
  ];

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 start-0 bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between lg:gap-x-[54px]  mx-auto px-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/images/logo.svg"
            className="h-[93px] w-[164px]"
            alt="Pink Logo"
          />
        </Link>
        <div
          className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <img
            src="/images/menu.svg"
            alt="menu icon"
            className="block lg:hidden cursor-pointer"
          />
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-sticky"
        >
          <ul className="font-mont flex flex-col p-4 lg:p-0 mt-4 font-normal lg:space-x-[30px] rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
            {menuItems?.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="font-mont block py-2 px-3 text-[#EF1A98] leading-[30px] rounded lg:bg-transparent lg:p-0 uppercase"
                  aria-current="page"
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {showMobileNav && (
          <div className="block lg:hidden h-[400px] bg-black w-full">
            <ul className="font-mont flex flex-col p-4 mt-4 font-normal rtl:space-x-reverse items-center">
              {menuItems?.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="font-mont block py-2 px-3 text-[#EF1A98] leading-[30px] rounded lg:bg-transparent lg:p-0 uppercase"
                    aria-current="page"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
