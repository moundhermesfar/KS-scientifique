const ReasonCard = ({ reason }) => {
  return (
    <div className="bg-white border-2 border-red-400 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl text-center shadow-red">
      <div className="mb-2 mx-auto">
        <img
          src={reason.pic}
          className="rounded-full w-24 h-24 object-cover mx-auto"
        />
      </div>
      <div className="mb-2">
        <h2 className="font-bold">{reason.title}</h2>
      </div>
      <div>
        <p>{reason.paragraph}</p>
      </div>
    </div>
  );
};

export default ReasonCard;
