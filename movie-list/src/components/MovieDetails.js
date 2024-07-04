import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieList } from './MovieListContext'; // Import the context
import '../App.css'; // Import the CSS file correctly

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { addMovie } = useMovieList(); // Use the context

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=2cf36365`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Failed to fetch movie details', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details-page">
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
      <button onClick={() => addMovie(movie)}>Add to List</button> {/* Add button */}
    </div>
  );
}

export default MovieDetails;
