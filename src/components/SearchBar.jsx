import { Search, X } from 'lucide-react';

function SearchBar({ query, onQueryChange, onSearchSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(query);
    }
  };

  return (
    <form className="search-bar" role="search" onSubmit={handleSubmit}>
      <label htmlFor="city-search-input" className="sr-only">
        Search for a city
      </label>

      <div className="search-input-wrapper">
        <Search className="search-icon" size={18} aria-hidden="true" />
        <input
          id="city-search-input"
          type="search"
          className="search-input"
          placeholder="Search city..."
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={() => onQueryChange('')}
            aria-label="Clear search"
          >
            <X size={16} aria-hidden="true" />
          </button>
        )}
      </div>

      <button type="submit" className="search-submit-btn">
        Search
      </button>
    </form>
  );
}

export default SearchBar;

