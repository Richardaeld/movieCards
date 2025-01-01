import { MovieCard } from "../components/MovieCard.jsx";

export function Home() {
   const movies = [
      {id: 1, title: 1, release_date: 1},
      {id: 2, title: 2, release_date: 2},
      {id: 3, title: 3, release_date: 3},
   ]

   return (
      <div className="home">
         <div className="movie-grid">
            {movies.map(movie => (
               <MovieCard movie={movie} key={movie.id} />
            ))}
         </div>
      </div>
   );
}