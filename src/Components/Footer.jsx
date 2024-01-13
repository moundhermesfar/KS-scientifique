import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mt-20 shadow-sm bg-slate-950 text-white p-10 pt-12 flex flex-col justify-center items-center"
    >
      <div className="text-center font-serif">
        <p className="text-4xl mb-10 mt-10">Contactez Nous</p>
      </div>
      <div className="mb-7 flex justify-center items-center">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            color="red"
            className="hover:text-red-700"
          />
        </a>
        <p className="ml-2 text-lg font-medium text-white">
          kscientifique@gmail.com
        </p>
      </div>
      <div className="mb-7 flex justify-center items-center">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            color="red"
            className="hover:text-red-700"
          />
        </a>
        <p className="ml-2 text-lg font-medium text-white">kscientifique</p>
      </div>
      <div className="mb-7 flex justify-center items-center">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faPhone}
            size="2x"
            color="red"
            className="hover:text-red-700"
          />
        </a>
        <p className="ml-2 text-lg font-medium text-white">+213 540 30 54 96</p>
      </div>
    </footer>
  );
};

export default Footer;
