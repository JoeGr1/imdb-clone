const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2">
      {result.original_title}
    </div>
  );
};

export default Card;
