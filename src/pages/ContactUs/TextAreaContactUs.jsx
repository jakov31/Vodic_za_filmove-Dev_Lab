const TextAreaContactUs = ({ onChange, value }) => {
  return (
    <div className="relative mb-6">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
        htmlFor="textArea"
      >
        Youre Message{" "}
      </label>
      <textarea
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="textArea"
        rows="3"
        name="message"
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextAreaContactUs;
