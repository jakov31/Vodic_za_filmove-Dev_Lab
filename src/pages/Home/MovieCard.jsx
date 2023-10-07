import React from "react";
import { MdGrade } from "react-icons/md";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="max-w-md w-[330px] mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
    >
      <div className="md:flex ">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full object-cover md:w-44"
            src={movie.image}
            alt={movie.name}
          />
        </div>
        <div className="p-8 relative">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {movie.name}
          </div>
          <div className=" flex flex-col flex-nowrap">
            <p className="grow my-2 text-gray-500">{movie.description}</p>
            <p className="absolute bottom-1 left-1">{movie.year}</p>
            <p className="flex flex-wrap items-center translate-x-0 absolute bottom-1 right-1 text-sm ">
              <MdGrade className="text-[#fde68a]" />
              {movie.rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
