import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useScrollDirection from "../hooks/useScrollDirection";

const containerVariants = {
  hidden: {
    x: "-100vh",
  },
  visible: {
    x: "0vh",
    transition: { ease: "easeInOut", duration: 1 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const NavBar = () => {
  const containerVariants = {
    hidden: {
      x: "-100vh",
    },
    visible: {
      x: "0vh",
      transition: { ease: "easeInOut" },
    },
  };
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
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Repayment calculator",
      path: "/repayment-calculator",
    },
    {
      title: "Financial solutions",
      path: "/financial-solutions",
    },
  ];

  const scrollDirection = useScrollDirection();
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    // <nav
    //   className={`fixed w-full top-0 z-20 start-0 ${
    //     scrollDirection === "up" ? "bg-transparent" : "bg-black"
    //     "bg-transparent"
    //   }`}
    // >
    <nav className={`fixed z-50 md:relative w-full bg-black lg:bg-transparent`}>
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
            src={showMobileNav ? "/images/menu.svg" : "/images/menu.svg"}
            alt="menu icon"
            className="block lg:hidden cursor-pointer"
          />
        </div>

        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-sticky"
        >
          <motion.ul
            className="font-mont flex flex-col p-4 lg:p-0 mt-4 font-normal lg:space-x-[30px] rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            {menuItems?.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  color: "#ef3447",
                }}
                // className="gradient-text"
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                <Link
                  to={item.path}
                  className="font-mont block py-2 px-3 text-[#EF1A98] leading-[30px] rounded lg:bg-transparent lg:p-0 uppercase gradient-text transition-all ease-in-out"
                  aria-current="page"
                >
                  {item?.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <AnimatePresence>
          {showMobileNav && (
            <motion.div
              className="block lg:hidden bg-white w-full rounded-[20px] px-[28px] "
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-end items-center pt-[26px]">
                <img
                  src="/images/menu-close.svg"
                  alt="menu icon"
                  className="cursor-pointer"
                  onClick={() => setShowMobileNav(false)}
                />
              </div>

              <motion.ul className="flex flex-col pb-[54px] font-normal rtl:space-x-reverse">
                {menuItems?.map((item, index) => (
                  <motion.li key={index}>
                    <Link
                      to={item.path}
                      className="block py-2 px-3 text-black hover:text-[#EF1A98] text-base leading-[25px]"
                      aria-current="page"
                    >
                      {item?.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
