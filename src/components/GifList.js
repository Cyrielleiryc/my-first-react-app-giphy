import Gif from './Gif.js'

function GifList({gifs, updateGifID}) {

  return (
    <div className="gif-list">
      { gifs.map(gif => <Gif gifID={gif.id} key={gif.id} updateGifID={updateGifID} />) }
    </div>
  )
}

export default GifList
