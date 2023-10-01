import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/getMovies'; 

const HomePage = () => {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Popular Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
