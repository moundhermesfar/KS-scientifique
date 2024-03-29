import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { useSnackbar } from "notistack";
import Nav from "../Components/Nav";
import Footer1 from "../Components/Footer1";

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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

    if (!form.name || !form.email || !form.message) {
      enqueueSnackbar("Veuillez remplir le formulaire avant de l'envoyer.", {
        variant: "error",
      });
      setLoading(false);
    } else if (!isEmailValid(form.email)) {
      enqueueSnackbar("Adresse e-mail invalide", { variant: "error" });
    } else {
      // Use template literals for cleaner code
      emailjs
        .send(
          "service_6rc8cet",
          "template_41o8m8b",
          {
            from_name: form.name,
            to_name: "Moundher Mesfar",
            from_email: form.email,
            to_email: "mesfarmounether@gmail.com",
            message: form.message,
          },
          "1SlXE_8toabLDo0m6"
        )
        .then(
          (response) => {
            setLoading(false);
            console.log("Email sent successfully:", response);

            // Consider displaying a success message to the user instead of using the alert
            enqueueSnackbar("Merci. Nous vous répondrons dès que possible.", {
              variant: "info",
            });

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
            enqueueSnackbar(
              "Ah, quelque chose s'est mal passé. Veuillez réessayer.",
              {
                variant: "error",
              }
            );
          }
        );
    }
  };

  return (
    <div>
      <Nav />
      <div className="pt-[10%] pb-[10%] bg-white">
        <div
          className={`rounded-[30px] ml-[10%] w-[80%] pb-20 pt-10 bg-[#139FFB] xl:mt-12 flex xl:flex-row flex-col-reverse overflow-hidden`}
        >
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
          >
            <p className="text-white ">Prenez contact</p>
            <h3 className={styles.sectionHeadText}>Contact :</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Nom et Prenom:
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Quel est votre prénom?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Votre email:
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Quelle est votre adresse email?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Votre message:
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Contenue de message"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                className="bg-blue-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              >
                {loading ? "Envoi en cours..." : "Envoyer"}
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
      <Footer1 />
    </div>
  );
};

export default Contact;
