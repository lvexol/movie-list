import React, { useState } from 'react';
import { useMovieList } from './MovieListContext';
import './MyList.css';

function MyList() {
  const { movieList, removeMovie } = useMovieList();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [notes, setNotes] = useState('');
  const [showNotesModal, setShowNotesModal] = useState(false);

  const handleRemove = (movie) => {
    removeMovie(movie.imdbID);
  };

  const openNotesModal = (movie) => {
    setSelectedMovie(movie);
    setShowNotesModal(true);
    // Load existing notes for this movie if available
    // Example: setNotes(movie.notes || '');
  };

  const saveNotes = () => {
    // Save notes logic
    // Example: update movie.notes = notes;
    setShowNotesModal(false);
  };

  const closeModal = () => {
    setShowNotesModal(false);
  };

  return (
    <div className="my-list-page">
      <h2>My Movie List</h2>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} onClick={() => openNotesModal(movie)} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <button onClick={() => handleRemove(movie)}>Remove</button>
          </li>
        ))}
      </ul>

      {showNotesModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-inner">
              <div className="modal-text">
                <h2>{selectedMovie.Title}</h2>
                <p>{selectedMovie.Year}</p>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Write your notes here..."
                  rows={6}
                />
                <button onClick={saveNotes}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyList;
