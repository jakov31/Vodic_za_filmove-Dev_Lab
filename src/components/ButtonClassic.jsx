const ButtonClassic = ({ onClick, type, buttonText }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className=" mt-[1rem] bg-[#320A28] hover:bg-[#681453] text-white font-bold py-2 px-4 rounded-full"
    >
      {buttonText}
    </button>
  );
};

export default ButtonClassic;
