import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { HoloBook } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useMobile } from "../utils/useMobile";


const Contact = () => {
  const isMobile = useMobile();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_y8hqvk8",
        "template_lqeayqy",
        {
          from_name: form.name,
          to_name: "Rodrigo",
          from_email: form.email,
          to_email: "wintermute.ryf@gmail.com",
          message: form.message,
        },
        "PwO7d7dit2l4rUaDA"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8"
      >
        <h3 className={`${styles.sectionHeadText} cyberpunk`}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name :</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your name?"
              className="cyberborder bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none  font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email :</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your email?"
              className="cyberborder bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message :</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Write me a message..."
              className="cyberborder bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium resize-none"
            />
          </label>
          <button
            type="submit"
            className="active:translate-y-0.5 cyberpunk2077">
            {loading ? "Sending..." : "Send_"}
          </button>
        </form>
      </motion.div>

      { isMobile ? ( 
        false
      ) : ( 
       <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <HoloBook/>
      </motion.div> 
      )}

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
