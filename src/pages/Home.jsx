import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/getMovies'; 
import ModalWindow from './UI/ModalWindow';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await getMovies.getAllMovies();
        console.log(response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

   const handleMovieClick=(movie)=>{
    setSelectedMovie(movie)

  };

  function handleCloseModal(){
    setSelectedMovie(null);
  }

  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-semibold mb-4">Top Rated Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={() => handleMovieClick(movie)}/>
        ))}
      </div>
      <ModalWindow isOpen={selectedMovie !== null} onClose={handleCloseModal} movie={selectedMovie} />
    </div>
  );
};

export default HomePage;
