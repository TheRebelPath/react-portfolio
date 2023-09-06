import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import Tech from "./Tech";

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
       <h2 className={`${styles.sectionHeadText} mb-10`}>Experience.</h2>
     </motion.div>
 
    <motion.div
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
      <Tilt className="h-full"
     tiltMaxAngleX={4}
     tiltMaxAngleY={4}
     perspective={800}
     transitionSpeed={2500}
     tiltEasing="ease-in-out"
     scale={1.04}
     glareEnable={true}
     glareMaxOpacity={0.55}
     glareColor="purple"
     glarePosition="all"
     glareBorderRadius="20px"
     >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="lg:max-w-[370px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
  
       
        <p className="mt-4 text-secondary  text-[19px] max-w-3xl leading-[30px]">
        With development, it is essential to stay updated with the latest tools and technologies. Throughout my coding journey, I have focused on the essentials (HTML, CSS, JavaScript) while also picking up tools that can further improve my skillset (React, Tailwind, etc.).
        </p>
        </div>
      </motion.div>

      </Tilt>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Tech/>


      </motion.div>
    </motion.div>
    </>
);

export default SectionWrapper(Experience, "experience");
