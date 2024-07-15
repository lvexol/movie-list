import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import './MovieList.css';

function MovieList({ movies, hasSearched }) {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleMovieClick = (id) => {
    setSelectedMovieId(id);
  };

  const handleCloseModal = () => {
    setSelectedMovieId(null);
  };

  if (!hasSearched) {
    return null;
  }

  if (!movies || movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item">
          <img 
            src={movie.Poster} 
            alt={`${movie.Title} poster`} 
            onClick={() => handleMovieClick(movie.imdbID)}
          />
          <div className="movie-details">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
      {selectedMovieId && (
        <MovieDetails id={selectedMovieId} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default MovieList;
