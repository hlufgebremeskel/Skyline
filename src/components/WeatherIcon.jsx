import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Moon,
  Sun,
} from 'lucide-react';

const ICON_MAP = {
  sunny: Sun,
  'partly-cloudy': CloudSun,
  cloudy: Cloud,
  rain: CloudRain,
  storm: CloudLightning,
  snow: CloudSnow,
  fog: CloudFog,
  'clear-night': Moon,
};

function WeatherIcon({ type, size = 24, className = '' }) {
  const IconComponent = ICON_MAP[type] || CloudSun;

  return <IconComponent size={size} className={className} aria-hidden="true" />;
}

export default WeatherIcon;

