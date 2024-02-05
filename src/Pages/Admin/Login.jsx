import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { EarthCanvas } from "../canvas";
import { slideIn } from "../../utils/motion";
import Nav from "../../Components/Nav";
import { useNavigate } from "react-router-dom";
import Footer1 from "../../Components/Footer1";

const Login = () => {
  const [auth, setAuth] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const username = import.meta.env.VITE_USERNAME;
  const password = import.meta.env.VITE_PASSWORD;

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    if (!form.username || !form.password) {
      alert("Veuillez remplir tous les champs");
      setLoading(false);
    } else {
      if (form.username === username && form.password === password) {
        setAuth(true);
        navigate("/admin", { state: { auth: true } });
      } else {
        alert("Wrong password or Username");
        setLoading(false);
      }
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
            <p className="text-white ">Bonjour!</p>
            <h3 className={styles.sectionHeadText}>Login</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Username</span>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="username"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Password</span>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="password"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <button
                type="submit"
                className="bg-blue-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              >
                {loading ? "Logging in.." : "Login"}
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

export default Login;
