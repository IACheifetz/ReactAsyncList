// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getAlbums, getAnimals, getMovies, getGames } from './services/fetch-utils';
import AlbumList from './AlbumList';
import AnimalList from './AnimalList';
import MovieList from './MovieList';

function App() {
  const [Albums, setAlbums] = useState([]);
  const [Animals, setAnimals] = useState([]);
  const [Movies, setMovies] = useState([]);

  useEffect(async () => {
    const albumResponse = await getAlbums();
    const animalResponse = await getAnimals();
    const movieResponse = await getMovies();
    setAlbums(albumResponse);
    setAnimals(animalResponse);
    setMovies(movieResponse);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {
          <AlbumList Albums={Albums} />   
        }
        {
          <AnimalList Animals={Animals} /> 
        }
        {
          <MovieList Movies={Movies} /> 
        }
      </header>
    </div>
  );
}

export default App;
