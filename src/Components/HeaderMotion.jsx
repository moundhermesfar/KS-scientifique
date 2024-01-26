import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="mt-10 w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-blue-500 font-medium">
          Bien-vennez
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">KS Scientifique</h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Optimisez vos expériences en laboratoire avec nos offres exclusives
          sur des équipements de haute qualité. Découvrez des outils essentiels
          à prix réduits. Améliorez votre recherche dès aujourd'hui !
        </p>
        <a href="##categories">
          <button className="bg-blue-700 text-white font-medium py-2 px-4 rounded transition-all hover:bg-blue-900 active:scale-95">
            trouvez votre produit
          </button>
        </a>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.thebusinessplanshop.com/labo-medical/ouvrir-laboratoire-analyses-medicales.jpg",
  },
  {
    id: 2,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OALa3u_TV8CCoaFQO9ByM-oQyTqdRC0Z1A&usqp=CAU",
  },
  {
    id: 3,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCSPmR5jyhXK-iSRBupWwaYOdo-ULarNNiuonvJQfEedsmbdl2IZVzGgXCEExPUvDI5zQ&usqp=CAU",
  },
  {
    id: 4,
    src: "data:image/jpeg;base64,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",
  },
  {
    id: 5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YXPyfxWhKnUQRn4IND2hZo9peV_B72uRjJhi-gbSJ7XinhDeol4IsIulUG2SBm0uU-4&usqp=CAU",
  },
  {
    id: 6,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2THaH_aCO13zM89RlULgdnZcCqiIyLwRAfojvQyyW0v6GC3kJYHjBZqcE2yRZ-C_gmk&usqp=CAU",
  },
  {
    id: 7,
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9e/LabMachines.jpg",
  },
  {
    id: 8,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GfNZURrHYey2MrrjHnZhCPVjJvhOSK0Yl4TbZe5rzwjoh0OoghOwQdumuKt7Q32HBvI&usqp=CAU",
  },
  {
    id: 9,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESgV4zaaD7oEIh_w-18zobPULOxAeMIwTzg&usqp=CAU",
  },
  {
    id: 10,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekW-f3NcpRu5HUXWGfFpDl5nF11RKLL-x1g&usqp=CAU",
  },
  {
    id: 11,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1uHu16waP1gAOSLFwzTJCpkf-zLBlUlLXA&usqp=CAU",
  },
  {
    id: 12,
    src: "https://c8.alamy.com/comp/2EMJBFN/modern-medical-research-laboratory-scientific-lab-and-drug-engineering-center-full-of-high-tech-equipment-computer-showing-dna-concept-technology-2EMJBFN.jpg",
  },
  {
    id: 13,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5VWYs_MK8N1mbOjqdDVFYH97DPAi6G3N8A&usqp=CAU",
  },
  {
    id: 14,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XvDX1ObhRtvOQvURLjk-4-IBFzx7O_7ixA&usqp=CAU",
  },
  {
    id: 15,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR913lgHRtpigC_sHlKxsXjKPUZKHvdv2xdTg&usqp=CAU",
  },
  {
    id: 16,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhDtecLoKEBzvVi966j7MR4mFqcQKqTZ10A&usqp=CAU",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
