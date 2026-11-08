import { IMAGE_URL } from "../api/tmdb";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average.toFixed(1)}</p>
    </div>
  );
}