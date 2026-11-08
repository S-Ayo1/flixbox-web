import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieRow({ title, fetchMovies }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(setMovies).catch(console.error);
  }, [fetchMovies]);

  return (
    <section className="movie-row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies
          .filter((m) => m.poster_path)
          .map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
      </div>
    </section>
  );
}