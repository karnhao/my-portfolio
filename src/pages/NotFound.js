import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <main className="not-found fade-in">
    <h1>404</h1>
    <p>Oops! That page got lost in the code.</p>
    <Link to="/">Back to Home</Link>
  </main>
);

export default NotFound;
