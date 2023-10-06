const RangeInput = ({ onChange, defaultValue, onMouseUp }) => {
  return (
    <div className=" mt-3 md:ml-3">
      <input
        onChange={onChange}
        type={"range"}
        min={"1"}
        max={"10"}
        defaultValue={defaultValue}
        onMouseUp={onMouseUp}
        className="range"
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
    </div>
  );
};

export default RangeInput;
