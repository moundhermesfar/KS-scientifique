import React, { useEffect, useState } from "react";
import labo1 from "../assets/labo1.jpg";
import labo2 from "../assets/labo2.jpg";
import labo3 from "../assets/labo3.jpg";

const Header = () => {
  const [currentImage, setCurrentImage] = useState(labo1);
  const images = [labo1, labo2, labo3];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <header className="flex-col overflow-hidden relative flex min-h-[1024px] w-full max-md:max-w-full z-10">
      <img
        loading="lazy"
        src={currentImage}
        className="absolute h-full w-full object-cover object-center inset-0 max-h-full"
        alt="Lab Image"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-white text-center text-4xl md:text-6xl lg:text-6xl max-md:text-4xl max-md:mt-10">
          La brillance du laboratoire libérée
        </div>
        <div className="p-5 text-white text-center text-lg md:text-3xl max-w-[738px] mt-10 max-md:max-w-full max-md:mt-5">
          Optimisez votre travail en laboratoire avec notre vente exclusive
          d'équipements et de consommables ! Découvrez des outils et fournitures
          de haute qualité pour des recherches de pointe. Offres limitées sur
          des équipements essentiels. Améliorez votre expérience en laboratoire
          – faites vos achats maintenant !
        </div>
      </div>
    </header>

    // <div>
    //   {/* <head>
    //     <meta charSet="UTF-8" />
    //     <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <title>tailwind web</title>
    //     <link
    //       href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap"
    //       rel="stylesheet"
    //     />
    //     <script src="https://cdn.tailwindcss.com"></script>
    //   </head> */}
    //   <div className="text-gray-100 font-[Poppins]">
    //     <nav className="fixed top-0 left-0 w-full py-6">
    //       <div className="container mx-auto flex justify-between">
    //         <img src={packag} className="h-8 animate-bounce" />
    //         <ul className="text-sm tracking-wide items-center flex gap-x-8">
    //           <li className="hover:scale-125 duration-300 py-1 hover:text-teal-400">
    //             <a className="cursor-pointer">Home</a>
    //           </li>
    //           <li className="hover:scale-125 duration-300 py-1 hover:text-teal-400">
    //             <a className="cursor-pointer">Product</a>
    //           </li>
    //           <li className="hover:scale-125 duration-300 py-1 hover:text-teal-400">
    //             <a className="cursor-pointer">About us</a>
    //           </li>
    //           <li className="hover:scale-125 duration-300 py-1 hover:text-teal-400">
    //             <a className="cursor-pointer">Contact</a>
    //           </li>
    //           <button className="bg-teal-600 px-7 rounded-full tracking-wide py-3 text-xs hover:scale-110 duration-300">
    //             GET STARTED
    //           </button>
    //         </ul>
    //       </div>
    //     </nav>
    //     <section className="bg-[#23304c] h-screen flex px-[10%] py-[6%]">
    //       <img
    //         src={Ellipse}
    //         className="z-20 animate-ping w-6 absolute left-24 top-56"
    //       />
    //       <img
    //         src={Ellipse}
    //         className="z-20 animate-ping w-6 absolute right-96 top-36"
    //       />
    //       <img
    //         src={Ellipse}
    //         className="z-20 animate-ping w-6 absolute left-64 bottom-24"
    //       />
    //       <img
    //         src={Ellipse}
    //         className="z-20 animate-ping w-6 absolute right-40 top-64"
    //       />
    //       <img src={wave3} className="absolute bottom-20 right-36 w-96" />
    //       <img src={wave} className="absolute z-20 bottom-0 right-0 w-2/3" />
    //       <div className="flex-1">
    //         <img src={loading} className="w-9/12" />
    //       </div>
    //       <div className="flex-1 pt-7">
    //         <div className="absolute">
    //           <h1 className="text-3xl leading-normal py-6">
    //             Build visual <br />
    //             tracking systems <br />
    //             for your
    //             <span className="underline decoration-teal-500">customers</span>
    //           </h1>
    //           <button className="bg-teal-600 px-7 rounded-full tracking-wide py-3 text-xs hover:scale-110 duration-300">
    //             GET STARTED
    //           </button>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
  );
};

export default Header;
