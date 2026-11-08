import { useEffect, useState } from "react";
import { getTrending, BACKDROP_URL } from "../api/tmdb";

export default function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getTrending()
      .then((movies) => {
        const withImage = movies.filter((m) => m.backdrop_path);
        setMovie(withImage[Math.floor(Math.random() * withImage.length)]);
      })
      .catch(console.error);
  }, []);

  if (!movie) return null;

  return (
    <header
      className="banner"
      style={{ backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})` }}
    >
      <div className="banner-content">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </header>
  );
}