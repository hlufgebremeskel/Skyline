import { CloudRain, Compass, Droplets, Sunrise, Sunset, Wind } from 'lucide-react';
import WeatherCard from './WeatherCard.jsx';

function WeatherDetails({ weather }) {
  const detailItems = [
    {
      id: 'humidity',
      title: 'Humidity',
      value: weather.humidity,
      unit: '%',
      subtitle: 'Relative air moisture',
      icon: Droplets,
    },
    {
      id: 'wind-speed',
      title: 'Wind Speed',
      value: weather.windSpeed,
      unit: 'km/h',
      subtitle: 'Surface wind velocity',
      icon: Wind,
    },
    {
      id: 'wind-direction',
      title: 'Wind Direction',
      value: weather.windDirection,
      unit: '',
      subtitle: 'Prevailing wind bearing',
      icon: Compass,
    },
    {
      id: 'precipitation',
      title: 'Precipitation',
      value: weather.precipitation,
      unit: 'mm',
      subtitle: 'Recent rainfall amount',
      icon: CloudRain,
    },
    {
      id: 'sunrise',
      title: 'Sunrise',
      value: weather.sunrise,
      unit: '',
      subtitle: 'Local morning sunrise',
      icon: Sunrise,
    },
    {
      id: 'sunset',
      title: 'Sunset',
      value: weather.sunset,
      unit: '',
      subtitle: 'Local evening sunset',
      icon: Sunset,
    },
  ];

  return (
    <section className="weather-details" aria-labelledby="weather-details-heading">
      <h2 id="weather-details-heading" className="section-heading">
        Weather Details
      </h2>

      <div className="weather-details-grid">
        {detailItems.map((item) => (
          <WeatherCard
            key={item.id}
            title={item.title}
            value={item.value}
            unit={item.unit}
            subtitle={item.subtitle}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default WeatherDetails;

