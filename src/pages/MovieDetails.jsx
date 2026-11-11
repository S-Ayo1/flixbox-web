import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails, IMAGE_URL, BACKDROP_URL } from "../api/tmdb";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMovieDetails(id)
      .then(setMovie)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status">Error: {error}</p>;

  const cast = movie.credits.cast.slice(0, 8);

  return (
    <div className="details">
      {movie.backdrop_path && (
        <div
          className="details-backdrop"
          style={{ backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})` }}
        />
      )}
      <div className="details-content">
        <Link to="/" className="back-link">← Back</Link>
        <div className="details-main">
          {movie.poster_path && (
            <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
          )}
          <div className="details-info">
            <h1>{movie.title}</h1>
            <p className="meta">
              {movie.release_date?.slice(0, 4)} • {movie.runtime} min • ⭐{" "}
              {movie.vote_average.toFixed(1)}
            </p>
            <p className="meta">{movie.genres.map((g) => g.name).join(" • ")}</p>
            <p>{movie.overview}</p>
            <h3>Cast</h3>
            <p>{cast.map((c) => c.name).join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}