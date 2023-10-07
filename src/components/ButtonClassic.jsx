const ButtonClassic = ({ onClick, type, buttonText }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className=" mt-[1rem] bg-[#c11919] hover:text-[#c11919] hover:bg-white hover:border-[#c11919] text-white font-bold py-2 px-4 rounded-full"
    >
      {buttonText}
    </button>
  );
};

export default ButtonClassic;
