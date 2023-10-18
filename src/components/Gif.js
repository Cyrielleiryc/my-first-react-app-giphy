function Gif({gifID, updateGifID}) {

  const handleClick = (event) => {
    updateGifID(gifID)
  }

  if (!gifID) {
    return <p>Loading...</p>
  }
  return (
    <img src={`https://media3.giphy.com/media/${gifID}/100.gif?cid=ecf05e47wijw9r5qoasj4ckqtv4r6losgah3mt3smjxd8v3t&ep=v1_gifs_trending&rid=100.gif&ct=g`} alt="" className="gif" onClick={handleClick} />
  )
}

export default Gif
