import React, { createContext, useState, useContext } from 'react';

const MovieListContext = createContext();

export const useMovieList = () => useContext(MovieListContext);

export const MovieListProvider = ({ children }) => {
  const [movieList, setMovieList] = useState([]);

  const addMovie = (movie) => {
    setMovieList((prevList) => [...prevList, movie]);
  };

  const removeMovie = (imdbID) => {
    setMovieList((prevList) => prevList.filter(movie => movie.imdbID !== imdbID));
  };

  return (
    <MovieListContext.Provider value={{ movieList, addMovie, removeMovie }}> {/* Include removeMovie in value */}
      {children}
    </MovieListContext.Provider>
  );
};
