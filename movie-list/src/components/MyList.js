import React from 'react';
import { useMovieList } from './MovieListContext';
import './MyList.css';

function MyList() {
  const { movieList, removeMovie } = useMovieList(); // Import removeMovie function from context

  const handleRemove = (movie) => {
    removeMovie(movie.imdbID); // Assuming imdbID is a unique identifier for each movie
  };

  return (
    <div className="my-list-page">
      <h2>My Movie List</h2>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <button onClick={() => handleRemove(movie)}>Remove</button> {/* Add Remove button */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyList;
