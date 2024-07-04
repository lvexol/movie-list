import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBox from './SearchBox';
import './NavBar.css';

function NavBar({ onSearch }) {
  const location = useLocation();
  const showSearch = location.pathname === '/';

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-link">Home</Link>
      {showSearch && <SearchBox onSearch={onSearch} />}
      <Link to="/mylist" className="nav-link">My List</Link>
      <Link to="/login" className="nav-link">Login</Link> {/* Add My List link */}
    </nav>
  );
}

export default NavBar;
