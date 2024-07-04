import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import NavBar from './components/NavBar';
import Login from './components/Login';
import MyList from './components/MyList';
import { MovieListProvider } from './components/MovieListContext'; // Correct import path
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const fetchMovies = async (query) => {
    setHasSearched(true);
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=2cf36365`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setError('');
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (error) {
      setError('Failed to fetch movies');
      setMovies([]);
    }
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('User logged in');
  };

  return (
    <MovieListProvider>
      <Router>
        <div className="App">
          <NavBar onSearch={fetchMovies} />
          <h1>Movie List</h1>
          {error && <p>{error}</p>}
          <Routes>
            <Route path="/" element={<MovieList movies={movies} hasSearched={hasSearched} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/mylist" element={<MyList />} />
          </Routes>
        </div>
      </Router>
    </MovieListProvider>
  );
}

export default App;
