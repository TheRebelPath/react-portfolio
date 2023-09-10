import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo} from "../assets";
import { useMobile } from "../utils/useMobile";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { MenuButton } from "./canvas";
import { socials } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  const isMobile = useMobile()


  useEffect(() => {
    if(toggle && isMobile) {
      document.body.style.overflow = 'hidden';
    } 
   if(!isMobile) {
    document.body.style.overflow = 'unset';
   } 
   if (!toggle) {
    document.body.style.overflow = 'unset';
   }
 }, [toggle, isMobile]);


  return (
    <nav
    className={`${
      styles.paddingX
    } w-full flex items-start  py-5 fixed top-0 z-20 border-2 border-white-500 
     ${toggle && isMobile ? "inset-0  bg-primary" : " "}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto border-2 border-yellow-500 ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Rodrigo &nbsp;{" "}
            <span className="sm:block hidden">| Front End Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#f4f511]" : "text-secondary"
              } hover:text-[#f4f511] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center border-solid border-2 border-red-500 z-50">
    
          <MenuButton
             toggle={toggle}
             setToggle={setToggle}
             />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 left-0 bottom-50 min-w-[140px] z-10  border-solid border-2 border-sky-500 `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <AnimatePresence >
              {navLinks.map((link, index) => (
                <motion.li
                variants={fadeIn('right', 'spring', 0.1 * index, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                  key={link.id}
                  className={`${
                    active === link.title ? "text-[#f4f511] cyberpunk" : "text-secondary"
                  }  font-medium cursor-pointer text-[50px]`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </motion.li>
              ))}
              </AnimatePresence>
            </ul>
            <div className="absolute flex  top-[400px] left-0 w-full h-[410px] bg-red-400">
              {/* <p className="cyberpunk">Testing</p> */}
              {socials.map((social) => (
              <a key={social.name}
                 href={social.url}
                 target='_blank'
                 rel='noreferrer '>
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-[30px] h-[30px] object-contain cursor-pointer transition ease-in-out delay-150 hover:scale-150"
                />
              </a>

            ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
