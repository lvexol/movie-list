import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieList } from './MovieListContext';
import './MovieDetails.css'; // Ensure correct path to CSS file

function MovieDetails({ id, onClose }) {
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const { addMovie } = useMovieList();

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

  const handleAddComment = () => {
    setComments([...comments, { text: commentText, author: 'Anonymous' }]);
    setCommentText('');
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-inner">
          <div className="modal-image">
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
          </div>
          <div className="modal-text">
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
              <div><strong>Language:</strong> {movie.Language}</div>
              <div><strong>Country:</strong> {movie.Country}</div>
              <div><strong>Awards:</strong> {movie.Awards}</div>
              <div><strong>Metascore:</strong> {movie.Metascore}</div>
              <div><strong>IMDb Rating:</strong> {movie.imdbRating}</div>
              <div><strong>IMDb Votes:</strong> {movie.imdbVotes}</div>
            </div>
            <button onClick={() => addMovie(movie)}>Add to List</button>
          </div>
          <div className="comment-section">
            <h3>Comments</h3>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>
                  <strong>{comment.author}:</strong> {comment.text}
                </li>
              ))}
            </ul>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
            />
            <button onClick={handleAddComment}>Add Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
