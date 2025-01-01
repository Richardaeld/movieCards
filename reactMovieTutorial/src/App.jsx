import { useState } from 'react';
import './App.css';
import { MovieCard } from './components/MovieCard.jsx';


export function App() {
  return (
      <>
        <MovieCard movie={{
          title:"Film",
          release_date: "2024"
          }} />
      </>
  )
}
