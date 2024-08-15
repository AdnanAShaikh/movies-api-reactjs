import React from "react";
import Movie from "./Movie";

function MovieList({ movies, onSelectedId }) {
  return (
    <ul className="list list-movies">
      {movies.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          handleSelectedId={onSelectedId}
        />
      ))}
    </ul>
  );
}

export default MovieList;
