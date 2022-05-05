// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getAlbums, getAnimals, getMovies, getGames } from './services/fetch-utils';
import AlbumList from './AlbumList';
import AnimalList from './AnimalList';

function App() {
  const [Albums, setAlbums] = useState([]);
  const [Animals, setAnimals] = useState([]);

  useEffect(async () => {
    const albumResponse = await getAlbums();
    const animalResponse = await getAnimals();
    setAlbums(albumResponse);
    setAnimals(animalResponse);
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
      </header>
    </div>
  );
}

export default App;
