// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getAlbums, getAnimals, getMovies, getGames } from './services/fetch-utils';
import AlbumList from './AlbumList';
import AnimalList from './AnimalList';
import MovieList from './MovieList';
import GameList from './GameList';

function App() {
  const [Albums, setAlbums] = useState([]);
  const [Animals, setAnimals] = useState([]);
  const [Movies, setMovies] = useState([]);
  const [Games, setGames] = useState([]);

  useEffect(async () => {
    const albumResponse = await getAlbums();
    const animalResponse = await getAnimals();
    const movieResponse = await getMovies();
    const gameResponse = await getGames();

    setAlbums(albumResponse);
    setAnimals(animalResponse);
    setMovies(movieResponse);
    setGames(gameResponse);
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
        {
          <GameList Games={Games} /> 
        }
      </header>
    </div>
  );
}

export default App;
