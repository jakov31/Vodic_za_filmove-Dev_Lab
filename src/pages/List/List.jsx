import { useState } from "react";
import FilterList from "./FilterList";
import Main from "./Main";

const List = () => {
  const [filterSearch, setFilterSearch] = useState("");

  const searchInputHandler = (filter) => {
    console.log(filter, "iz liste uspjelo");
    setFilterSearch(filter);
  };

  return (
    <div>
      <FilterList onFilter={searchInputHandler} />
      <Main filter={filterSearch} />
    </div>
  );
};

export default List;
