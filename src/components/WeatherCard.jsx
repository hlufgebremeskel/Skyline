function WeatherCard({ title, value, unit = '', subtitle = '', icon: Icon, className = '' }) {
  return (
    <article className={`weather-card ${className}`.trim()}>
      <header className="weather-card-header">
        {Icon && <Icon className="weather-card-icon" size={18} aria-hidden="true" />}
        <h3 className="weather-card-title">{title}</h3>
      </header>

      <p className="weather-card-value">
        <span>{value}</span>
        {unit && <span className="weather-card-unit">{unit}</span>}
      </p>

      {subtitle && <p className="weather-card-subtitle">{subtitle}</p>}
    </article>
  );
}

export default WeatherCard;

