import { useState, useEffect } from "react";
import ButtonClassic from "../../components/ButtonClassic";
import { getAllMovies } from "../../services/apiRoutes";
import MovieCard from "../Home/MovieCard";
import Card from "./Card";

const Main = ({ filter }) => {
  const [loading, setLoading] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(6);

  const [movies, setMovies] = useState([]);

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

  const nameFilteredMovies = movies.filter((item) => {
    return filter.toLowerCase() === ""
      ? item
      : item.name.toLowerCase().startsWith(filter);
  });

  const numberOfFIlteredMovies = nameFilteredMovies.length;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 justify-items-center mt-3">
        {loading && <p className="text-center">Loading...</p>}

        {nameFilteredMovies.slice(0, numberOfItems).map((item) => (
          <Card key={item.id} movie={item} />
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
