import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getAllMovies } from "../services/apiRoutes";

const ShowsContext = createContext({
  movies: [],
  removeShow: (id) => {},
  editShow: (show, id) => {},
  loadingMovies: false,
});

export const ShowsContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  //   const setMoviesHandler = () => {
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getAllMovies();

        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  //   };

  const removeItemHandler = (id) => {
    setMovies((prevLista) => {
      const newList = prevLista.filter((item) => item.id !== id);
      return newList;
    });
  };

  const editShowHandler = (editedShow, id) => {
    setMovies((prevLista) => {
      const existingItemIndex = prevLista.findIndex((item) => item.id === id);

      let updatedList;

      updatedList = [...prevLista];
      updatedList[existingItemIndex] = editedShow;

      return updatedList;
    });
  };

  const contextValue = {
    movies: movies,
    editShow: editShowHandler,
    loadingMovies: loading,
    removeShow: removeItemHandler,
  };

  //   useEffect(() => {
  //   console.log(movies);
  //   }, [movies]);

  return (
    <ShowsContext.Provider value={contextValue}>
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContext;
