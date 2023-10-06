import React from "react";

const ModalWindow = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-70">
      <div className="modal bg-white w-5/6 md:w-1/2 lg:w-5/6 lg:h-5/6 rounded-lg p-3 flex flex-col">
        <div className="flex justify-end ">
          <button
            className="bg-red-500 hover:bg-red-800 text-white font-semibold py-1 px-4 rounded-full mt-1 "
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div className="modal-content text-center">
          <h2 className="py-8 font-bold">{movie.name}</h2>
          <img
            className="mx-auto lg:h-1/2 lg:w-1/3 "
            src={movie.image}
            alt={movie.name}
          />
          <div className="flex flex-col mt-5 gap-4">
            <p>{movie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
