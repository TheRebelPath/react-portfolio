import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper} from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full"
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    perspective={800}
    transitionSpeed={2500}
    tiltEasing="ease-in-out"
    scale={1.07}
    glareEnable={true}
    glareMaxOpacity={0.55}
    glareColor="purple"
    glarePosition="all"
    glareBorderRadius="20px"
    >
      <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div 
         className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
         >
          <img src={icon} alt="title" className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary  text-[17px] max-w-3xl leading-[30px]">
        Hi there, I'm Rodrigo, a self-taught front end web developer from Mexico. 
        I have a passion for all things technology and design, and I love creating beautiful and functional websites. 
        I'm always eager to learn new skills and tools, and I'm looking for job opportunities where I can contribute, learn and grow as a developer.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard  key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

