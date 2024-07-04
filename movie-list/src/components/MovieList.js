import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

function MovieList({ movies, hasSearched }) {
  if (!hasSearched) {
    return null; // Don't show anything before searching
  }

  if (!movies || movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item">
          <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <div className="movie-details">
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
