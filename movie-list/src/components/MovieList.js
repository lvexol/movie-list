import React, { useState } from 'react';
import MovieDetails from './MovieDetails'; // Import MovieDetails component
import './MovieList.css';

function MovieList({ movies, hasSearched }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openMovieDetails = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null);
  };

  if (!hasSearched) {
    return null; // Don't show anything before searching
  }

  if (!movies || movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item" onClick={() => openMovieDetails(movie)}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <div className="movie-details">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
      {selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeMovieDetails}>&times;</span>
            <div className="modal-inner">
              <div className="modal-image">
                <img src={selectedMovie.Poster} alt={`${selectedMovie.Title} poster`} />
              </div>
              <div className="modal-text">
                <h2>{selectedMovie.Title}</h2>
                <div className="details-grid">
                  <div><strong>Year:</strong> {selectedMovie.Year}</div>
                  <div><strong>Rated:</strong> {selectedMovie.Rated}</div>
                  <div><strong>Released:</strong> {selectedMovie.Released}</div>
                  <div><strong>Runtime:</strong> {selectedMovie.Runtime}</div>
                  <div><strong>Genre:</strong> {selectedMovie.Genre}</div>
                  <div><strong>Director:</strong> {selectedMovie.Director}</div>
                  <div><strong>Writer:</strong> {selectedMovie.Writer}</div>
                  <div><strong>Actors:</strong> {selectedMovie.Actors}</div>
                </div>
                <p>{selectedMovie.Plot}</p>
                <div className="details-grid">
                  <div><strong>Language:</strong> {selectedMovie.Language}</div>
                  <div><strong>Country:</strong> {selectedMovie.Country}</div>
                  <div><strong>Awards:</strong> {selectedMovie.Awards}</div>
                  <div><strong>Metascore:</strong> {selectedMovie.Metascore}</div>
                  <div><strong>IMDb Rating:</strong> {selectedMovie.imdbRating}</div>
                  <div><strong>IMDb Votes:</strong> {selectedMovie.imdbVotes}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
