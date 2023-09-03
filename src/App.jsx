import { BrowserRouter } from "react-router-dom";
import { useMobile } from "./utils/useMobile";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer
} from "./components";

const App = () => {

  const isMobile = useMobile()

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className={`${isMobile? "bg-hero-pattern-mobile" : "bg-hero-pattern" } bg-cover bg-no-repeat bg-center`}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
