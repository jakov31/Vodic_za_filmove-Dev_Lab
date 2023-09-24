const InputForm = ({ labelText, type, placeholder, design }) => {
  return (
    <div className={`w-full px-3 mb-6 md:mb-0 ${design}`}>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={labelText}
      >
        {labelText}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id={labelText}
        type={type}
        placeholder={placeholder}
      />
      {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
    </div>
  );
};

export default InputForm;
