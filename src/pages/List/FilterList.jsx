import { useState } from "react";
import ButtonClassic from "../../components/ButtonClassic";

const FilterList = ({ onFilter }) => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [nameFilterisCheked, setNameFilterIsChecked] = useState(true);
  const [isCheked2, setIsChecked2] = useState(false);
  const [isCheked3, setIsChecked3] = useState(false);
  const [rangeInputValue, setRangeInputValue] = useState(1);

  const searchInputHandler = (event) => {
    return setSearchInputValue(event.target.value);
  };

  const handleCheckbox1Change = () => {
    setNameFilterIsChecked((prev) => !prev);
  };
  const handleCheckbox2Change = () => {
    setIsChecked2((prev) => !prev);
  };
  const handleCheckbox3Change = () => {
    setIsChecked3((prev) => !prev);
  };
  console.log(nameFilterisCheked, "by name");
  console.log(isCheked2, "filter 2");
  console.log(isCheked3, "filter 3");

  const handleRatingChange = (event) => {
    const newRating = parseInt(event.target.value);
    setRangeInputValue(newRating);
  };

  console.log(searchInputValue);
  onFilter(searchInputValue);

  return (
    <div className="w-[100%] mt-5 h-[50%] bg-[#E0D68A] pt-[3%] rounded-full">
      <div className="w-[80%] border-solid border-slate-300 m-auto">
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Type here"
          type={"text"}
          onChange={searchInputHandler}
        />
        <ButtonClassic buttonText={"Search"} type="button" />
      </div>
      <div className="flex w-[100%] justify-center">
        <div>
          <label>By name</label>
          <input
            type={"checkbox"}
            checked={nameFilterisCheked}
            onChange={handleCheckbox1Change}
          />
        </div>
        <div>
          <label>Filter 2</label>
          <input
            type={"checkbox"}
            checked={isCheked2}
            onChange={handleCheckbox2Change}
          />
        </div>
        <div>
          <label>Filter 3</label>
          <input
            type={"checkbox"}
            checked={isCheked3}
            onChange={handleCheckbox3Change}
          />
        </div>
        <div className="ml-3">
          <input
            onChange={handleRatingChange}
            type={"range"}
            min={"1"}
            max={"10"}
            defaultValue={rangeInputValue}
          />
          <label className="ml-3 font-bold">{rangeInputValue}</label>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
