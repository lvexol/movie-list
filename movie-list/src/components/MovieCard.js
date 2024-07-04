import React from 'react';

function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
}

export default MovieCard;