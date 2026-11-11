import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";
import { getTrending, getTopRated, getUpcoming } from "../api/tmdb";

export default function Home() {
  return (
    <>
      <Banner />
      <main>
        <MovieRow title="Trending This Week" fetchMovies={getTrending} />
        <MovieRow title="Top Rated" fetchMovies={getTopRated} />
        <MovieRow title="Upcoming" fetchMovies={getUpcoming} />
      </main>
    </>
  );
}