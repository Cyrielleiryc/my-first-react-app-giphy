import giphy from 'giphy-api'

function SearchBar({updateGifs}) {

  const search = (query) => {
    giphy('nYnGitgyvRdbyZM57euVpqjJcs34NXyx').search({
      q: `${query}`,
      rating: 'g'
      }, function (err, res) {
        updateGifs(res.data)
    })
  }

  const handleChange = (event) => {
    search(event.target.value)
  }

  return (
  <input type="text" className="form-search form-control" onChange={handleChange} ></input>
  )
}

export default SearchBar
