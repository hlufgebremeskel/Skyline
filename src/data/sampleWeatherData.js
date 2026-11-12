// Temporary sample data used in Phase 2 to build and test the UI layout.
// This will be replaced with live Open-Meteo API responses in Phases 4–7.

export const SAMPLE_CITY = {
  id: 'addis-ababa-et',
  name: 'Addis Ababa',
  country: 'Ethiopia',
  admin1: 'Addis Ababa',
  localDate: 'Thursday, November 12, 2026',
};

export const SAMPLE_RECENT_CITIES = [
  {
    id: 'addis-ababa-et',
    name: 'Addis Ababa',
    country: 'Ethiopia',
  },
  {
    id: 'nairobi-ke',
    name: 'Nairobi',
    country: 'Kenya',
  },
  {
    id: 'london-gb',
    name: 'London',
    country: 'United Kingdom',
  },
];

export const SAMPLE_CURRENT_WEATHER = {
  temperature: 22,
  feelsLike: 21,
  highTemp: 24,
  lowTemp: 13,
  description: 'Partly cloudy',
  iconType: 'partly-cloudy',
  humidity: 54,
  windSpeed: 14,
  windDirection: 'ENE',
  precipitation: 0.2,
  sunrise: '06:18 AM',
  sunset: '06:04 PM',
};

export const SAMPLE_HOURLY_FORECAST = [
  { time: 'Now', temperature: 22, iconType: 'partly-cloudy', precipitationProbability: 10 },
  { time: '16:00', temperature: 23, iconType: 'partly-cloudy', precipitationProbability: 10 },
  { time: '17:00', temperature: 21, iconType: 'cloudy', precipitationProbability: 15 },
  { time: '18:00', temperature: 19, iconType: 'cloudy', precipitationProbability: 20 },
  { time: '19:00', temperature: 17, iconType: 'clear-night', precipitationProbability: 10 },
  { time: '20:00', temperature: 16, iconType: 'clear-night', precipitationProbability: 5 },
  { time: '21:00', temperature: 15, iconType: 'clear-night', precipitationProbability: 5 },
  { time: '22:00', temperature: 15, iconType: 'clear-night', precipitationProbability: 5 },
  { time: '23:00', temperature: 14, iconType: 'clear-night', precipitationProbability: 5 },
  { time: '00:00', temperature: 14, iconType: 'clear-night', precipitationProbability: 10 },
  { time: '01:00', temperature: 13, iconType: 'clear-night', precipitationProbability: 10 },
  { time: '02:00', temperature: 13, iconType: 'cloudy', precipitationProbability: 15 },
  { time: '03:00', temperature: 13, iconType: 'cloudy', precipitationProbability: 15 },
  { time: '04:00', temperature: 12, iconType: 'fog', precipitationProbability: 15 },
  { time: '05:00', temperature: 12, iconType: 'fog', precipitationProbability: 10 },
  { time: '06:00', temperature: 13, iconType: 'partly-cloudy', precipitationProbability: 10 },
  { time: '07:00', temperature: 15, iconType: 'sunny', precipitationProbability: 5 },
  { time: '08:00', temperature: 17, iconType: 'sunny', precipitationProbability: 5 },
  { time: '09:00', temperature: 19, iconType: 'sunny', precipitationProbability: 5 },
  { time: '10:00', temperature: 21, iconType: 'partly-cloudy', precipitationProbability: 10 },
  { time: '11:00', temperature: 22, iconType: 'partly-cloudy', precipitationProbability: 10 },
  { time: '12:00', temperature: 24, iconType: 'partly-cloudy', precipitationProbability: 15 },
  { time: '13:00', temperature: 24, iconType: 'rain', precipitationProbability: 40 },
  { time: '14:00', temperature: 23, iconType: 'rain', precipitationProbability: 35 },
];

export const SAMPLE_DAILY_FORECAST = [
  {
    date: '2026-11-12',
    day: 'Today',
    description: 'Partly cloudy',
    iconType: 'partly-cloudy',
    minTemp: 13,
    maxTemp: 24,
  },
  {
    date: '2026-11-13',
    day: 'Fri',
    description: 'Mostly sunny',
    iconType: 'sunny',
    minTemp: 12,
    maxTemp: 25,
  },
  {
    date: '2026-11-14',
    day: 'Sat',
    description: 'Light showers',
    iconType: 'rain',
    minTemp: 13,
    maxTemp: 22,
  },
  {
    date: '2026-11-15',
    day: 'Sun',
    description: 'Thunderstorm',
    iconType: 'storm',
    minTemp: 12,
    maxTemp: 21,
  },
  {
    date: '2026-11-16',
    day: 'Mon',
    description: 'Overcast clouds',
    iconType: 'cloudy',
    minTemp: 11,
    maxTemp: 22,
  },
  {
    date: '2026-11-17',
    day: 'Tue',
    description: 'Partly cloudy',
    iconType: 'partly-cloudy',
    minTemp: 12,
    maxTemp: 24,
  },
  {
    date: '2026-11-18',
    day: 'Wed',
    description: 'Clear sky',
    iconType: 'sunny',
    minTemp: 13,
    maxTemp: 25,
  },
];

