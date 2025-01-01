import { MovieCard } from "../components/MovieCard.jsx";
import { useState } from "react"

export function Home() {
   const [searchQuery, setSearchQuery] = useState("");

   const movies = [
      {id: 1, title: 1, release_date: 1},
      {id: 2, title: 2, release_date: 2},
      {id: 3, title: 3, release_date: 3},
   ]

   const handleSearch = e => {
      e.preventDefault();
      alert(searchQuery)
   }

   return (
      <div className="home">
         <form onSubmit={handleSearch} className="search-form">
            <input 
               type="text"
               placeholder="Search for movies..."
               className="search-input"
               value={searchQuery}
               onChange={e => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
         </form>
         <div className="movie-grid">
            {movies.map(movie => (
               <MovieCard movie={movie} key={movie.id} />
            ))}
         </div>
      </div>
   );
}