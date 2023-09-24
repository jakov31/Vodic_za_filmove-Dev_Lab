import { useState } from "react";

const FilterList = ({ onFilter }) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const searchInputHandler = (event) => {
    return setSearchInputValue(event.target.value);
  };

  console.log(searchInputValue);
  onFilter(searchInputValue);

  return (
    <div className="w-[100%] h-[50%] bg-blue-300 pt-[3%] rounded-full">
      <div className="w-[80%] border-solid border-slate-300 m-auto">
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Type here"
          type={"text"}
          onChange={searchInputHandler}
        />
        <button className=" mt-[1rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Search
        </button>
      </div>
      <div className="flex w-[100%] justify-center">
        <div>
          <label>Filter 1</label>
          <input type={"checkbox"} />
        </div>
        <div>
          <label>Filter 2</label>
          <input type={"checkbox"} />
        </div>
        <div>
          <label>Filter 3</label>
          <input type={"checkbox"} />
        </div>
      </div>
    </div>
  );
};

export default FilterList;
