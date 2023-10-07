import { MdGrade } from "react-icons/md";

const Card = ({ movie }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ml-2">
      <figure>
        <img className="w-full" src={movie.image} alt="Movie Picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.name}</h2>

        <div className=" flex flex-col flex-nowrap">
          <p className="my-2 text-gray-500 overflow-ellipsis line-clamp-3">
            {movie.description}
          </p>
          <p className="absolute bottom-1 left-1">{movie.year}</p>
          <p className="flex flex-wrap items-center translate-x-0 absolute bottom-1 right-1 text-sm ">
            <MdGrade className="text-[#fde68a]" />
            {movie.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
