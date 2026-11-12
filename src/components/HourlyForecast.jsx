import WeatherIcon from './WeatherIcon.jsx';

function HourlyForecast({ hours, unit }) {
  return (
    <section id="hourly" className="forecast-section" aria-labelledby="hourly-forecast-heading">
      <div className="section-header-row">
        <h2 id="hourly-forecast-heading" className="section-heading">
          Hourly Forecast
        </h2>
        <span className="section-subtitle">Next 24 hours</span>
      </div>

      <ul className="hourly-list">
        {hours.map((hour) => (
          <li key={hour.time} className="hourly-item">
            <span className="hourly-time">{hour.time}</span>
            <WeatherIcon type={hour.iconType} size={24} className="hourly-icon" />
            <span className="hourly-temp">
              {hour.temperature}°{unit}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HourlyForecast;

