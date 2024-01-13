import ReasonCard from "../Components/reasonCard.jsx";

const Pourquoi = ({ reasons }) => {
  return (
    <div className="mt-20 text-center flex flex-col items-center p-5">
      <h2 className="text-3xl font-semibold text-red-500 mb-10">
        Pourquoi KS scientifique
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {reasons.map((item) => (
          <ReasonCard key={item.id} reason={item} />
        ))}
      </div>
    </div>
  );
};

export default Pourquoi;
