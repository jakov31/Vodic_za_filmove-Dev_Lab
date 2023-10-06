import { useEffect, useState } from "react";
import ButtonClassic from "../../components/ButtonClassic";
import RangeInput from "./RangeInput";

const FilterList = ({ onFilter, category = "ime" }) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(category);
  const [rangeInputValue, setRangeInputValue] = useState(1);

  const searchInputHandler = (event) => {
    return setSearchInputValue(event.target.value);
  };

  const handleRatingChange = (event) => {
    const newRating = parseInt(event.target.value);
    setRangeInputValue(newRating);
  };

  console.log(selectedCategory);

  const searchMovieByNameHandler = (e) => {
    e.preventDefault();
    onFilter(searchInputValue);

    console.log(searchInputValue);
  };

  // useEffect(() => {
  //   onFilter(searchInputValue);
  // }, [onFilter, searchInputValue]);

  const mouseUpSearchHandler = () => {
    console.log("za ocjenu", rangeInputValue);
  };

  const handleOptionChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="w-[100%] mt-5 h-[50%] bg-base-300 pt-[3%] rounded-md md:rounded-full shadow-lg ">
      <div className="w-[80%] border-solid border-slate-300 m-auto">
        {/* <input
          className="appearance-none block w-1/2 md:w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Type here"
          type={"text"}
          onChange={searchInputHandler}
        />
        
        <ButtonClassic buttonText={"Search"} type="button" /> */}
        <form onSubmit={searchMovieByNameHandler}>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-x"
            onChange={searchInputHandler}
          />
          <ButtonClassic buttonText={"Search"} />
        </form>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-center ">
        <div className="flex flex-col md:flex-row">
          <div className="mt-3 md:ml-3 flex">
            <input
              type={"radio"}
              name="category"
              checked={selectedCategory === "ime"}
              onChange={handleOptionChange}
              value={"ime"}
              className="radio"
            />
            <label className="text-white">By name</label>
          </div>
          <div className="mt-3 md:ml-3 flex">
            <input
              type={"radio"}
              name="category"
              checked={selectedCategory === "kategorija 2"}
              onChange={handleOptionChange}
              value={"kategorija 2"}
              className="radio"
            />
            <label className="text-white">Commedy</label>
          </div>
          <div className="mt-3 md:ml-3 flex">
            <input
              type={"radio"}
              name="category"
              checked={selectedCategory === "kategorija 3"}
              onChange={handleOptionChange}
              value={"kategorija 3"}
              className="radio"
            />
            <label className="text-white">Thriler</label>
          </div>
          <RangeInput
            defaultValue={rangeInputValue}
            onChange={handleRatingChange}
            onMouseUp={mouseUpSearchHandler}
          />
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

{
  /* <input
            onChange={handleRatingChange}
            type={"range"}
            min={"1"}
            max={"10"}
            defaultValue={rangeInputValue}
            onMouseUp={mouseUpSearchHandler}
          />
          <label className="ml-3 font-bold">{rangeInputValue}/10</label> */
}
