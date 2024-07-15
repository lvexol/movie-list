import React from 'react';
import '../App.css'; // Import the CSS file correctly

function MovieDetails({ movie, onClose }) {
  return (
    <div className="movie-details-popup">
      <div className="movie-details-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h2>{movie.Title}</h2>
        <div className="details-grid">
          <div><strong>Year:</strong> {movie.Year}</div>
          <div><strong>Rated:</strong> {movie.Rated}</div>
          <div><strong>Released:</strong> {movie.Released}</div>
          <div><strong>Runtime:</strong> {movie.Runtime}</div>
          <div><strong>Genre:</strong> {movie.Genre}</div>
          <div><strong>Director:</strong> {movie.Director}</div>
          <div><strong>Writer:</strong> {movie.Writer}</div>
          <div><strong>Actors:</strong> {movie.Actors}</div>
        </div>
        <p>{movie.Plot}</p>
        <div className="details-grid">
          <div><strong>Language:</strong> {movie.Language}</div>
          <div><strong>Country:</strong> {movie.Country}</div>
          <div><strong>Awards:</strong> {movie.Awards}</div>
          <div><strong>Metascore:</strong> {movie.Metascore}</div>
          <div><strong>IMDb Rating:</strong> {movie.imdbRating}</div>
          <div><strong>IMDb Votes:</strong> {movie.imdbVotes}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
