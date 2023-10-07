import { useState, useEffect } from "react";
import ButtonClassic from "../../components/ButtonClassic";
import { getAllMovies } from "../../services/apiRoutes";
import MovieCard from "../Home/MovieCard";

const Main = ({ filter }) => {
  const [numberOfItems, setNumberOfItems] = useState(6);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllMovies();
        console.log(response.data);
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(movies);

  const nameFilteredMovies = movies.filter((item) => {
    return filter.toLowerCase() === ""
      ? item
      : item.name.toLowerCase().startsWith(filter);
  });

  const numberOfFIlteredMovies = nameFilteredMovies.length;

  console.log(numberOfFIlteredMovies, "broj filmove");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center mt-3">
        {nameFilteredMovies.slice(0, numberOfItems).map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
      <div className="flex justify-center">
        {numberOfFIlteredMovies > numberOfItems && (
          <ButtonClassic
            onClick={() => {
              setNumberOfItems((prev) => prev + 6);
            }}
            buttonText="Load more..."
          />
        )}
      </div>
    </>
  );
};

export default Main;
