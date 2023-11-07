import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getCategories } from "../../services/apiRoutes";
import FilterList from "./FilterList";
import Main from "./Main";

const List = () => {
  const [filterSearch, setFilterSearch] = useState("");
  const { state } = useLocation();

  const searchInputHandler = (filter) => {
    console.log(filter, "iz liste uspjelo");
    setFilterSearch(filter);
  };

  //////////////
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // setLoading(true);
  //     try {
  //       const response = await getCategories();

  //       console.log("getKategorije", response);
  //       // setMovies(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //     // setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  /////////////

  return (
    <div>
      <FilterList category={state?.category} onFilter={searchInputHandler} />
      <Main filter={filterSearch} />
    </div>
  );
};

export default List;
