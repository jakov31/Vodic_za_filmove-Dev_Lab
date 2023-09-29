import { useEffect, useState } from "react";
import ButtonClassic from "../../components/ButtonClassic";

const FilterList = ({ onFilter }) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("ime");
  const [rangeInputValue, setRangeInputValue] = useState(1);

  const searchInputHandler = (event) => {
    return setSearchInputValue(event.target.value);
  };

  const handleRatingChange = (event) => {
    const newRating = parseInt(event.target.value);
    setRangeInputValue(newRating);
  };

  console.log(selectedCategory);

  useEffect(() => {
    onFilter(searchInputValue);
  }, [onFilter, searchInputValue]);

  const mouseUpSearchHandler = () => {
    console.log("za ocjenu", rangeInputValue);
  };

  const handleOptionChange = (event) => {
    setSelectedCategory(event.target.value);
  };

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
      <div className="sm:grid sm:grid-cols-1 m:auto md:flex w-[100%] justify-center">
        <div className="ml-3">
          <input
            type={"radio"}
            name="category"
            checked={selectedCategory === "ime"}
            onChange={handleOptionChange}
            value={"ime"}
          />
          <label>By name</label>
        </div>
        <div className="ml-3">
          <input
            type={"radio"}
            name="category"
            checked={selectedCategory === "kategorija 2"}
            onChange={handleOptionChange}
            value={"kategorija 2"}
          />
          <label>Filter 2</label>
        </div>
        <div className="ml-3">
          <input
            type={"radio"}
            name="category"
            checked={selectedCategory === "kategorija 3"}
            onChange={handleOptionChange}
            value={"kategorija 3"}
          />
          <label>Filter 3</label>
        </div>
        <div className="ml-3">
          <input
            onChange={handleRatingChange}
            type={"range"}
            min={"1"}
            max={"10"}
            defaultValue={rangeInputValue}
            onMouseUp={mouseUpSearchHandler}
          />
          <label className="ml-3 font-bold">{rangeInputValue}/10</label>
        </div>
      </div>
    </div>
  );
};

export default FilterList;

// const [nameFilterisCheked, setNameFilterIsChecked] = useState(true);
// const [isCheked2, setIsChecked2] = useState(false);
// const [isCheked3, setIsChecked3] = useState(false);

// const handleCheckbox1Change = () => {
//   setNameFilterIsChecked((prev) => !prev);
// };
// const handleCheckbox2Change = () => {
//   setIsChecked2((prev) => !prev);
// };
// const handleCheckbox3Change = () => {
//   setIsChecked3((prev) => !prev);
// };
// console.log(nameFilterisCheked, "by name");
// console.log(isCheked2, "filter 2");
// console.log(isCheked3, "filter 3");
