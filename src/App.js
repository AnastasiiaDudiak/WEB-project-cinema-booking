import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import moviesData from './data/movies';
import Booking from './pages/Booking';
import Home from './pages/Home';

function App() {
  const [search, setSearch] = useState('');

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1 style={{ textAlign: 'center' }}>Актуальні фільми</h1>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Пошук фільму..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: '8px', width: '300px', fontSize: '16px' }}
              />
            </div>
            <MovieList movies={filteredMovies} />
          </div>
        }
      />
      <Route path="/booking/:id" element={<Booking />} />
    </Routes>
  );
}

export default App;

