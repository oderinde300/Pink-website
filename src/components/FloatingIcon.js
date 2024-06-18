import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const FloatingIcon = () => {
  return (
    <div className="w-full fixed bottom-8 z-50 max-w-screen-xl">
      <div className="flex justify-end">
        <div className="flex flex-col gap-4 mr-4">
          <motion.div
            className="bg-black border hover:border-[#EF1A98] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center cursor-pointer"
            animate={{
              borderColor: "#EF1A98",
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              scale: 1.1,
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <IoLogoWhatsapp color="#EF1A98" className="w-[30px] h-[30px]" />
          </motion.div>
          <motion.div
            className="bg-black border hover:border-[#EF1A98] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center cursor-pointer"
            animate={{
              borderColor: "#EF1A98",
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              scale: 1.1,
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            {" "}
            <IoMailOutline color="#EF1A98" className="w-[30px] h-[30px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FloatingIcon;
