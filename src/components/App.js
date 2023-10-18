import '../styles/App.css';
import { useState } from 'react';
import SearchBar from './SearchBar.js'
import Gif from './Gif.js'
import GifList from './GifList.js'

function App() {
  const [gifs, updateGifs] = useState([])
  const [gifID, updateGifID] = useState('')

  return (
    <div className="app">
      <div className="left-scene">
        <SearchBar updateGifs={updateGifs} />
        <div className="selected-gif">
          <Gif gifID={gifID} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={gifs} updateGifID={updateGifID}/>
      </div>
    </div>
  );
}

export default App;
