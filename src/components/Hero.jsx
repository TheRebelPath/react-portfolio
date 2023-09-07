import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { RobotCanvas } from "./canvas";
import { useMobile } from "../utils/useMobile";

const Hero = () => {

const isMobile = useMobile();

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >

        <div>
         <h1 className={`${styles.heroHeadText} text-white cyberpunk`}>
            Hi, I'm <span className="text-[#c5c905]">Rodrigo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop user interfaces <br className="sm:block hidden" />
            and web applications.
          </p>
        </div>
      </div>
      
      { isMobile ? ( 
        false
      ) : ( 
        <>
         <RobotCanvas/>
      </>
      )}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
         <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#2be4f7] flex justify-center items-start p-2">
            <motion.div 
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-[#2be4f7] mb-1"/>
          </div>
        </a>
      </div> 

    </section>
  );
};

export default Hero;
