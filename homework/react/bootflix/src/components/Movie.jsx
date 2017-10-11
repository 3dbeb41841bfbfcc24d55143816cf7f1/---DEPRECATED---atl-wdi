import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = ({ movie }) => {
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>{movie.Title}</h3>
        <p>
          <strong>Released:</strong> {movie.Year}<br />
          <strong>Directed By:</strong> {movie.Director}<br />
          <em>Genre:{movie.Genre}</em>
        </p>
        <p>{movie.Plot}</p>
      </div>
    </section>
  );
};

export default Movie;


