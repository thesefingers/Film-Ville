import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = `http://www.omdbapi.com?apikey=1a577424`;

// const movie = {
//   "Title" : "Amazing Spiderman Syndrome",
//   "Year" : "2012",
//   "imdbID" : "tt25866634",
//   "Type" : "movie",
//   "Poster" : "N/A"
// }

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect (() => {
    searchMovies('Superman');

  }, []);

  return (
    <div className="app">
      <h1>Film-Ville</h1>
      <div className='search'>
          <input 
          placeholder='Search Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img 
            src={SearchIcon}
            alt='search'
            onClick={() => searchMovies(searchTerm)}
          />
      </div>
      {/* <div className='container'>
        <MovieCard movie = 'movie' />
      </div> */}
      {movies?.length > 0
        ? (
           <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
           </div>
        ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )}
    </div>
  );
};

export default App;
