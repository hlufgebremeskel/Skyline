import { Menu } from 'lucide-react';
import SearchBar from './SearchBar.jsx';

function Header({
  city,
  searchQuery,
  onSearchQueryChange,
  onSearchSubmit,
  unit,
  onUnitChange,
  onOpenMobileMenu,
}) {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={onOpenMobileMenu}
          aria-label="Open navigation sidebar"
        >
          <Menu size={22} aria-hidden="true" />
        </button>

        <div className="header-location">
          <h1>
            {city.name}, <span className="header-country">{city.country}</span>
          </h1>
          <p className="header-date">{city.localDate}</p>
        </div>
      </div>

      <div className="header-actions">
        <SearchBar
          query={searchQuery}
          onQueryChange={onSearchQueryChange}
          onSearchSubmit={onSearchSubmit}
        />

        <div className="unit-toggle" role="group" aria-label="Temperature unit">
          <button
            type="button"
            className={`unit-btn ${unit === 'C' ? 'active' : ''}`}
            onClick={() => onUnitChange('C')}
            aria-pressed={unit === 'C'}
          >
            °C
          </button>
          <button
            type="button"
            className={`unit-btn ${unit === 'F' ? 'active' : ''}`}
            onClick={() => onUnitChange('F')}
            aria-pressed={unit === 'F'}
          >
            °F
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
