// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getAlbums } from './services/fetch-utils';
import AlbumList from './AlbumList';

function App() {
  const [Albums, setAlbums] = useState([]);

  useEffect(async () => {
    const albumResponse = await getAlbums();
    setAlbums(albumResponse);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {
          <AlbumList Albums={Albums} />  
        }
      </header>
    </div>
  );
}

export default App;
