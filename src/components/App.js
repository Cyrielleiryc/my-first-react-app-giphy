import '../styles/App.css';
import SearchBar from './SearchBar.js'
import Gif from './Gif.js'
import GifList from './GifList.js'

function App() {
  return (
    <div className="app">
      <div className="left-scene">
        <SearchBar />
        <Gif />
      </div>
      <GifList />
    </div>
  );
}

export default App;
