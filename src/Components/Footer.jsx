import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import logo from "../assets/logo-img.png";

const Footer = () => {
  return (
    <footer
      id="#contact"
      className="pt-20 shadow-sm bg-gradient-to-r from-blue-700 via-blue-900 to-black text-white flex-col sm:flex-row justify-center items-center h-[400px] content-center p-8"
    >
      <div className="text-center font-serif mb-6">
        <p className="text-2xl sm:text-4xl">Contactez Nous</p>
      </div>
      <div className="pt-4 sm:pt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-8">
        <div className="mb-4 sm:mb-0 flex justify-center items-center">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              color="white"
              className="hover:text-red-700"
            />
          </a>
          <p className="ml-2 text-sm sm:text-lg font-medium text-white">
            kscientifique@gmail.com
          </p>
        </div>
        <div className="mb-4 sm:mb-0 flex justify-center items-center">
          <a
            href="https://www.facebook.com/profile.php?id=100050354096175&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              color="white"
              className="hover:text-red-700"
            />
          </a>
          <p className="ml-2 text-sm sm:text-lg font-medium text-white">
            kS Scientifique
          </p>
        </div>
        <div className="flex justify-center items-center">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faPhone}
              size="2x"
              color="white"
              className="hover:text-red-700"
            />
          </a>
          <p className="ml-2 text-sm sm:text-lg font-medium text-white">
            +213 540 30 54 96
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-4 sm:mt-10">
        <img className="w-16 sm:w-24" src={logo} alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;
