import WeatherIcon from './WeatherIcon.jsx';

function DailyForecast({ days, unit }) {
  return (
    <section id="daily" className="forecast-section" aria-labelledby="daily-forecast-heading">
      <div className="section-header-row">
        <h2 id="daily-forecast-heading" className="section-heading">
          7-Day Forecast
        </h2>
        <span className="section-subtitle">Upcoming week</span>
      </div>

      <ul className="daily-list">
        {days.map((day) => (
          <li key={day.date} className="daily-item">
            <span className="daily-name">{day.day}</span>

            <div className="daily-condition">
              <WeatherIcon type={day.iconType} size={22} className="daily-icon" />
              <span>{day.description}</span>
            </div>

            <div className="daily-temps">
              <span className="daily-low">
                {day.minTemp}°{unit}
              </span>
              <span className="daily-temp-separator" aria-hidden="true">
                /
              </span>
              <span className="daily-high">
                {day.maxTemp}°{unit}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DailyForecast;

