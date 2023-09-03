import { RobotCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
// import Hero from './Hero';
// import Navbar from './Navbar';
// import About from './About';
// import Tech from './Tech';
// import Experience from './Experience';
// import Works from './Works';
// import Feedbacks from './Feedbacks';
// import Contact from './Contact';
// import Footer from './Footer';

// export {
//   Hero,
//   Navbar,
//   About,
//   Tech,
//   Experience,
//   Works,
//   Feedbacks,
//   Contact,
//   RobotCanvas, 
//   BallCanvas, 
//   ComputersCanvas, 
//   StarsCanvas,
//   Footer
// }
import { lazy } from "react";
const Hero = lazy(() => import("./Hero"));
const Navbar = lazy(() => import("./Navbar"));
const About = lazy(() => import("./About"));
const Tech = lazy(() => import("./Tech"));
const Experience = lazy(() => import("./Experience"));
const Works = lazy(() => import("./Works"));
const Feedbacks = lazy(() => import("./Feedbacks"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));


export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  RobotCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas,
  Footer
}