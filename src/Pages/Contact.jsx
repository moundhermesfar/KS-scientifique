import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Use template literals for cleaner code
    emailjs
      .send(
        "service_weu3wsh",
        "template_ovg6wdp",
        {
          from_name: form.name,
          to_name: "Kebiche Fouez",
          from_email: form.email,
          to_email: "kebichefouez@gmail.com",
          message: form.message,
        },
        "aEOPN0-ntObx0m2NS"
      )
      .then(
        (response) => {
          setLoading(false);
          console.log("Email sent successfully:", response);

          // Consider displaying a success message to the user instead of using the alert
          alert("Thank you. I will get back to you as soon as possible.");

          // Clear the form after successful submission
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Error sending email:", error);

          // Display an error message to the user
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      <NavBar />
      <div className="pt-[10%] pb-[10%] bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300">
        <div
          className={`rounded-[30px] ml-[10%] w-[80%] pb-20 pt-10 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-900 xl:mt-12 flex xl:flex-row flex-col-reverse overflow-hidden`}
        >
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
          >
            <p className="text-white ">Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                className="bg-blue-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
