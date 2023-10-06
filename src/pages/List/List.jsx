import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import FilterList from "./FilterList";
import Main from "./Main";

const List = () => {
  const [filterSearch, setFilterSearch] = useState("");
  const { state } = useLocation();

  const searchInputHandler = (filter) => {
    console.log(filter, "iz liste uspjelo");
    setFilterSearch(filter);
  };

  return (
    <div>
      <FilterList category={state?.category} onFilter={searchInputHandler} />
      <Main filter={filterSearch} />
    </div>
  );
};

export default List;
