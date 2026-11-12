import WeatherIcon from './WeatherIcon.jsx';

function CurrentWeather({ weather, unit }) {
  return (
    <article className="current-weather-card" aria-labelledby="current-weather-heading">
      <div className="current-weather-header">
        <h2 id="current-weather-heading">Current Weather</h2>
        <span className="current-weather-condition">{weather.description}</span>
      </div>

      <div className="current-weather-main">
        <div className="current-temp-group">
          <WeatherIcon type={weather.iconType} size={56} className="current-weather-icon" />
          <p className="current-temp">
            {weather.temperature}°{unit}
          </p>
        </div>

        <div className="current-weather-meta">
          <p>
            Feels like <strong>{weather.feelsLike}°{unit}</strong>
          </p>
          <p>
            High <strong>{weather.highTemp}°{unit}</strong> / Low{' '}
            <strong>{weather.lowTemp}°{unit}</strong>
          </p>
        </div>
      </div>
    </article>
  );
}

export default CurrentWeather;

