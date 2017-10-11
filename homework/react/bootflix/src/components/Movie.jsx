import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = ({ title, year, director, genre, plot }) => {
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>{title}</h3>
        <p>
          <strong>Released:</strong> {year}<br />
          <strong>Directed By:</strong> {director}<br />
          <em>Genre:{genre}</em>
        </p>
        <p>{plot}</p>
      </div>
    </section>
  );
};

export default Movie;


