import React from "react"

function Search({ searchInput, onSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchInput}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  )
}

export default Search
