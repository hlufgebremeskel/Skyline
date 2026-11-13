import { useState } from 'react';
import CurrentWeather from './components/CurrentWeather.jsx';
import DailyForecast from './components/DailyForecast.jsx';
import Header from './components/Header.jsx';
import HourlyForecast from './components/HourlyForecast.jsx';
import Sidebar from './components/Sidebar.jsx';
import WeatherDetails from './components/WeatherDetails.jsx';
import {
  SAMPLE_CITY,
  SAMPLE_CURRENT_WEATHER,
  SAMPLE_DAILY_FORECAST,
  SAMPLE_HOURLY_FORECAST,
  SAMPLE_RECENT_CITIES,
} from './data/sampleWeatherData.js';

function App() {
  const [selectedCity, setSelectedCity] = useState(SAMPLE_CITY);
  const [searchQuery, setSearchQuery] = useState('');
  const [unit, setUnit] = useState('C');
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleSelectCity = (city) => {
    setSelectedCity({
      ...SAMPLE_CITY,
      id: city.id,
      name: city.name,
      country: city.country,
    });
  };

  const handleSearchSubmit = (query) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      return;
    }

    setSelectedCity((previousCity) => ({
      ...previousCity,
      name: trimmedQuery,
      country: 'Sample Preview',
    }));
  };

  return (
    <div className="app-layout">
      <Sidebar
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        recentCities={SAMPLE_RECENT_CITIES}
        selectedCityId={selectedCity.id}
        onSelectCity={handleSelectCity}
        unit={unit}
        onUnitChange={setUnit}
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      <div className="dashboard-main">
        <Header
          city={selectedCity}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          onSearchSubmit={handleSearchSubmit}
          unit={unit}
          onUnitChange={setUnit}
          onOpenMobileMenu={() => setIsMobileSidebarOpen(true)}
        />

        <main className="dashboard-content">
          <section id="overview" className="overview-grid" aria-label="Current weather overview">
            <CurrentWeather weather={SAMPLE_CURRENT_WEATHER} unit={unit} />
            <WeatherDetails weather={SAMPLE_CURRENT_WEATHER} />
          </section>

          <HourlyForecast hours={SAMPLE_HOURLY_FORECAST} unit={unit} />
          <DailyForecast days={SAMPLE_DAILY_FORECAST} unit={unit} />
        </main>
      </div>
    </div>
  );
}

export default App;
