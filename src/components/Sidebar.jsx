import { CalendarDays, Clock, CloudSun, History, LayoutDashboard, MapPin } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', href: '#overview', icon: LayoutDashboard },
  { id: 'hourly', label: 'Hourly Forecast', href: '#hourly', icon: Clock },
  { id: 'daily', label: '7-Day Forecast', href: '#daily', icon: CalendarDays },
];

function Sidebar({
  activeSection,
  onSelectSection,
  recentCities,
  selectedCityId,
  onSelectCity,
  unit,
  onUnitChange,
}) {
  return (
    <aside className="sidebar" aria-label="Weatherly sidebar">
      <div className="sidebar-brand">
        <div className="brand-logo">
          <CloudSun size={28} aria-hidden="true" />
        </div>
        <div>
          <p className="brand-name">Weatherly</p>
          <p className="brand-tagline">Your weather, beautifully presented.</p>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Dashboard sections">
        <p className="sidebar-section-title">Dashboard</p>
        <ul className="nav-list">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectSection(item.id)}
                  aria-current={isActive ? 'location' : undefined}
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="sidebar-recent" aria-labelledby="recent-searches-heading">
        <div className="sidebar-section-header">
          <History size={16} aria-hidden="true" />
          <h2 id="recent-searches-heading" className="sidebar-section-title">
            Recent Searches
          </h2>
        </div>

        {recentCities.length > 0 ? (
          <ul className="recent-list">
            {recentCities.map((city) => {
              const isSelected = city.id === selectedCityId;

              return (
                <li key={city.id}>
                  <button
                    type="button"
                    className={`recent-city-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => onSelectCity(city)}
                    aria-current={isSelected ? 'true' : undefined}
                  >
                    <MapPin size={15} aria-hidden="true" />
                    <span className="recent-city-name">{city.name}</span>
                    <span className="recent-city-country">{city.country}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="recent-empty">No recent searches yet.</p>
        )}
      </section>

      <section className="sidebar-settings" aria-labelledby="unit-setting-heading">
        <h2 id="unit-setting-heading" className="sidebar-section-title">
          Temperature Unit
        </h2>
        <div className="unit-toggle" role="group" aria-label="Sidebar temperature unit">
          <button
            type="button"
            className={`unit-btn ${unit === 'C' ? 'active' : ''}`}
            onClick={() => onUnitChange('C')}
            aria-pressed={unit === 'C'}
          >
            Celsius (°C)
          </button>
          <button
            type="button"
            className={`unit-btn ${unit === 'F' ? 'active' : ''}`}
            onClick={() => onUnitChange('F')}
            aria-pressed={unit === 'F'}
          >
            Fahrenheit (°F)
          </button>
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;

