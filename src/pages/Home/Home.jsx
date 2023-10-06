import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { getAllMovies } from "../../services/apiRoutes";
import ModalWindow from "../UI/ModalWindow";
import MovieSlider from "./MovieSlider";
import Sidebar from "./SideBar";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [displayedMovies, setDisplayedMovies] = useState(3);

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

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  function handleCloseModal() {
    setSelectedMovie(null);
  }

  function handleLoadMore() {
    setDisplayedMovies((prevDisplayedMovies) => prevDisplayedMovies + 3);
  }

  return (
    <div className="bg-black">
      <div className="container mx-auto p-4">
        <h1 className="text-center text-white text-2xl font-semibold mb-8">
          Recent Movies
        </h1>
        <div className="flex flex-wrap sm:flex-wrap ">
          <div className="w-full md:w-3/4 sm:w-3/4">
            <MovieSlider data={movies} />
          </div>

          <div className="w-full md:w-1/4 sm:w-1/4">
            <Sidebar data={movies} />
          </div>
        </div>

        <h1 className="text-center text-white text-2xl font-semibold mb-4">
          Top Rated Movies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {movies.slice(0, displayedMovies).map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => handleMovieClick(movie)}
            />
          ))}
        </div>
        {displayedMovies < movies.length && (
          <div className="text-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
        <ModalWindow
          isOpen={selectedMovie !== null}
          onClose={handleCloseModal}
          movie={selectedMovie}
        />
      </div>
    </div>
  );
};

export default HomePage;
