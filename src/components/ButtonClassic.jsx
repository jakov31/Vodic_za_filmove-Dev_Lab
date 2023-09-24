const ButtonClassic = ({ type, buttonText }) => {
  return (
    <button
      type={type}
      className=" mt-[1rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      {buttonText}
    </button>
  );
};

export default ButtonClassic;
