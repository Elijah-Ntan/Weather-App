

import React, { useState } from 'react';
import Select from 'react-select';

function App() {
  const cities = [
    { value: { latitude: 51.5074, longitude: -0.1278 }, label: 'London' },
    { value: { latitude: 40.7128, longitude: -74.006 }, label: 'New York' },
    { value: { latitude: 35.6895, longitude: 139.6917 }, label: 'Tokyo' },
    { value: { latitude: 48.8566, longitude: 2.3522 }, label: 'Paris' },
    { value: { latitude: 28.6139, longitude: 77.2090 }, label: 'Delhi' },
    { value: { latitude: 55.7558, longitude: 37.6173 }, label: 'Moscow' },
    { value: { latitude: -33.8688, longitude: 151.2093 }, label: 'Sydney' },
    { value: { latitude: 34.0522, longitude: -118.2437 }, label: 'Los Angeles' },
    { value: { latitude: 19.4326, longitude: -99.1332 }, label: 'Mexico City' },
    { value: { latitude: 39.9042, longitude: 116.4074 }, label: 'Beijing' },
    { value: { latitude: 41.9028, longitude: 12.4964 }, label: 'Rome' },
    { value: { latitude: 52.52, longitude: 13.405 }, label: 'Berlin' },
    { value: { latitude: 37.7749, longitude: -122.4194 }, label: 'San Francisco' },
    { value: { latitude: -23.5505, longitude: -46.6333 }, label: 'São Paulo' },
    { value: { latitude: 1.3521, longitude: 103.8198 }, label: 'Singapore' },
    { value: { latitude: 31.2304, longitude: 121.4737 }, label: 'Shanghai' },
  { value: { latitude: 6.5244, longitude: 3.3792 }, label: 'Lagos' },
  { value: { latitude: 9.05785, longitude: 7.49508 }, label: 'Abuja' },
    { value: { latitude: 35.6762, longitude: 139.6503 }, label: 'Osaka' },
    { value: { latitude: 25.276987, longitude: 55.296249 }, label: 'Dubai' },
    { value: { latitude: 43.6532, longitude: -79.3832 }, label: 'Toronto' },
    { value: { latitude: 13.7563, longitude: 100.5018 }, label: 'Bangkok' },
    { value: { latitude: 45.4642, longitude: 9.19 }, label: 'Milan' },
    { value: { latitude: 50.1109, longitude: 8.6821 }, label: 'Frankfurt' },
    { value: { latitude: 59.3293, longitude: 18.0686 }, label: 'Stockholm' },
    { value: { latitude: 40.4168, longitude: -3.7038 }, label: 'Madrid' },
    { value: { latitude: 35.8617, longitude: 104.1954 }, label: 'China (Central)' },
    { value: { latitude: 37.9838, longitude: 23.7275 }, label: 'Athens' },
    { value: { latitude: 55.9533, longitude: -3.1883 }, label: 'Edinburgh' },
    { value: { latitude: 25.2048, longitude: 55.2708 }, label: 'Abu Dhabi' },
    { value: { latitude: 60.1699, longitude: 24.9384 }, label: 'Helsinki' },
    { value: { latitude: 35.6895, longitude: 51.389 }, label: 'Tehran' },
    { value: { latitude: 30.0444, longitude: 31.2357 }, label: 'Cairo' },
    { value: { latitude: 33.6844, longitude: 73.0479 }, label: 'Islamabad' },
    { value: { latitude: 24.7136, longitude: 46.6753 }, label: 'Riyadh' },
    { value: { latitude: 14.5995, longitude: 120.9842 }, label: 'Manila' },
    { value: { latitude: 35.9078, longitude: 127.7669 }, label: 'South Korea (Central)' },
    { value: { latitude: 53.3498, longitude: -6.2603 }, label: 'Dublin' },
    { value: { latitude: 19.076, longitude: 72.8777 }, label: 'Mumbai' },
    { value: { latitude: 22.3964, longitude: 114.1095 }, label: 'Hong Kong' },
    { value: { latitude: 40.6401, longitude: 22.9444 }, label: 'Thessaloniki' },
    { value: { latitude: 35.2271, longitude: -80.8431 }, label: 'Charlotte' },
    { value: { latitude: 32.7767, longitude: -96.797 }, label: 'Dallas' },
    { value: { latitude: 51.1657, longitude: 10.4515 }, label: 'Germany (Central)' },
  { value: { latitude: 38.7223, longitude: -9.1393 }, label: 'Lisbon' },
  { value: { latitude: 41.3851, longitude: 2.1734 }, label: 'Barcelona' },
  { value: { latitude: 40.730610, longitude: -73.935242 }, label: 'Brooklyn' },
  { value: { latitude: 48.2082, longitude: 16.3738 }, label: 'Vienna' },
  { value: { latitude: 37.5665, longitude: 126.9780 }, label: 'Seoul' },
  { value: { latitude: 55.6761, longitude: 12.5683 }, label: 'Copenhagen' },
  { value: { latitude: 52.3676, longitude: 4.9041 }, label: 'Amsterdam' },
  { value: { latitude: 35.7796, longitude: -78.6382 }, label: 'Raleigh' },
  { value: { latitude: 39.7392, longitude: -104.9903 }, label: 'Denver' },
  { value: { latitude: 25.7617, longitude: -80.1918 }, label: 'Miami' },
  { value: { latitude: 45.5017, longitude: -73.5673 }, label: 'Montreal' },
  { value: { latitude: 59.9139, longitude: 10.7522 }, label: 'Oslo' },
  { value: { latitude: 35.1495, longitude: -90.049 }, label: 'Memphis' },
  { value: { latitude: 33.4484, longitude: -112.074 }, label: 'Phoenix' },
  { value: { latitude: 29.7604, longitude: -95.3698 }, label: 'Houston' },
  { value: { latitude: 39.9526, longitude: -75.1652 }, label: 'Philadelphia' },
  { value: { latitude: 41.8781, longitude: -87.6298 }, label: 'Chicago' },
  { value: { latitude: 47.6062, longitude: -122.3321 }, label: 'Seattle' },
  { value: { latitude: 35.222, longitude: -97.439 }, label: 'Norman' },
  { value: { latitude: 42.3601, longitude: -71.0589 }, label: 'Boston' },
  { value: { latitude: 37.3382, longitude: -121.8863 }, label: 'San Jose' },
  { value: { latitude: 33.749, longitude: -84.388 }, label: 'Atlanta' },
  { value: { latitude: 36.1627, longitude: -86.7816 }, label: 'Nashville' },
  { value: { latitude: 38.9072, longitude: -77.0369 }, label: 'Washington DC' },
  { value: { latitude: 19.075983, longitude: 72.877655 }, label: 'Mumbai' },
  { value: { latitude: 35.6895, longitude: 139.6917 }, label: 'Tokyo' },
  { value: { latitude: 48.1351, longitude: 11.582 }, label: 'Munich' },
  { value: { latitude: 43.6532, longitude: -79.3832 }, label: 'Toronto' },
  { value: { latitude: 55.9533, longitude: -3.1883 }, label: 'Edinburgh' },
  { value: { latitude: 59.3293, longitude: 18.0686 }, label: 'Stockholm' },
  { value: { latitude: 60.1699, longitude: 24.9384 }, label: 'Helsinki' },
  { value: { latitude: 35.8617, longitude: 104.1954 }, label: 'China (Central)' },
  { value: { latitude: 51.1657, longitude: 10.4515 }, label: 'Germany (Central)' },
  { value: { latitude: 35.6895, longitude: 51.389 }, label: 'Tehran' },
    { value: { latitude: 19.4326, longitude: -99.1332 }, label: 'Mexico City' },
    { value: { latitude: 1.3521, longitude: 103.8198 }, label: 'Singapore' },
    { value: { latitude: 37.7749, longitude: -122.4194 }, label: 'San Francisco' },
    { value: { latitude: -23.5505, longitude: -46.6333 }, label: 'São Paulo' }
    
  ];

  const [selectedCity, setSelectedCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('celsius');
  const [forecastType, setForecastType] = useState('current'); // 'current', 'hourly', 'daily'

  const getWeather = async () => {
    if (!selectedCity) return;
    setLoading(true);
    setError(null);
    setWeather(null);
    const { latitude, longitude } = selectedCity.value;
    const tempUnit = unit === 'fahrenheit' ? 'fahrenheit' : 'celsius';
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&temperature_unit=${tempUnit}`;
    if (forecastType === 'current') {
      url += '&current_weather=true';
    } else if (forecastType === 'hourly') {
      url += '&hourly=temperature_2m,weathercode,windspeed_10m&timezone=auto';
    } else if (forecastType === 'daily') {
      url += '&daily=temperature_2m_max,temperature_2m_min,weathercode,windspeed_10m_max&timezone=auto';
      url += '&forecast_days=7'; // Ensure 7-day forecast
    }
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (forecastType === 'current') {
        setWeather(data.current_weather);
      } else if (forecastType === 'hourly') {
        setWeather(data.hourly);
      } else if (forecastType === 'daily') {
        setWeather(data.daily);
      }
    } catch (err) {
      setError('Failed to fetch weather data.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white bg-opacity-80 rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="weather">🌤️</span> Skymate
        </h1>
        <Select
          options={cities}
          value={selectedCity}
          onChange={setSelectedCity}
          placeholder="Select a city..."
          className="w-full mb-4"
        />
        <div className="flex w-full mb-4 gap-2 justify-center">
          <button
            className={`px-4 py-2 rounded-lg font-bold text-sm shadow transition-all duration-200 ${unit === 'celsius' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-700'}`}
            onClick={() => setUnit('celsius')}
            disabled={unit === 'celsius'}
          >Celsius</button>
          <button
            className={`px-4 py-2 rounded-lg font-bold text-sm shadow transition-all duration-200 ${unit === 'fahrenheit' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-blue-700'}`}
            onClick={() => setUnit('fahrenheit')}
            disabled={unit === 'fahrenheit'}
          >Fahrenheit</button>
        </div>
        <div className="flex w-full mb-4 gap-2 justify-center">
          <button
            className={`px-4 py-2 rounded-lg font-bold text-sm shadow transition-all duration-200 ${forecastType === 'current' ? 'bg-green-500 text-white' : 'bg-gray-200 text-green-700'}`}
            onClick={() => setForecastType('current')}
            disabled={forecastType === 'current'}
          >Current</button>
          <button
            className={`px-4 py-2 rounded-lg font-bold text-sm shadow transition-all duration-200 ${forecastType === 'hourly' ? 'bg-green-500 text-white' : 'bg-gray-200 text-green-700'}`}
            onClick={() => setForecastType('hourly')}
            disabled={forecastType === 'hourly'}
          >Hourly</button>
          <button
            className={`px-4 py-2 rounded-lg font-bold text-sm shadow transition-all duration-200 ${forecastType === 'daily' ? 'bg-green-500 text-white' : 'bg-gray-200 text-green-700'}`}
            onClick={() => setForecastType('daily')}
            disabled={forecastType === 'daily'}
          >Daily</button>
        </div>
        <button
          className="bg-blue-500 w-full py-3 text-white text-lg font-bold rounded-lg shadow hover:bg-blue-600 transition-all duration-200 ease-in-out mb-2"
          onClick={getWeather}
          disabled={!selectedCity || loading}
        >
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
        {error && <div className="text-red-500 font-semibold mb-2">{error}</div>}
        {weather && forecastType === 'current' && (
          (() => {
            // AI advice logic for current weather
            const temp = weather.temperature;
            const wind = weather.windspeed;
            const code = weather.weathercode;
            // Weather condition mapping
            const codeMap = {
              0: 'Clear sky',
              1: 'Mainly clear',
              2: 'Partly cloudy',
              3: 'Overcast',
              45: 'Fog',
              48: 'Depositing rime fog',
              51: 'Light drizzle',
              53: 'Moderate drizzle',
              55: 'Dense drizzle',
              56: 'Light freezing drizzle',
              57: 'Dense freezing drizzle',
              61: 'Slight rain',
              63: 'Moderate rain',
              65: 'Heavy rain',
              66: 'Light freezing rain',
              67: 'Heavy freezing rain',
              71: 'Slight snow fall',
              73: 'Moderate snow fall',
              75: 'Heavy snow fall',
              77: 'Snow grains',
              80: 'Slight rain showers',
              81: 'Moderate rain showers',
              82: 'Violent rain showers',
              85: 'Slight snow showers',
              86: 'Heavy snow showers',
              95: 'Thunderstorm',
              96: 'Thunderstorm with slight hail',
              99: 'Thunderstorm with heavy hail'
            };
            let condition = codeMap[code] || 'Unknown';
            let clothing = '';
            let hydration = '';
            let sports = '';
            // Clothing advice
            if (temp > (unit === 'celsius' ? 28 : 82)) {
              clothing = "It's pretty hot out! Go for light, breathable clothes, maybe shorts and a t-shirt. Don't forget your sunglasses and a hat.";
            } else if (temp < (unit === 'celsius' ? 10 : 50)) {
              clothing = "Brrr, it's chilly! Bundle up with a warm jacket, and maybe grab a scarf and gloves.";
            } else {
              clothing = "The weather's quite pleasant. Dress comfortably, maybe bring a light jacket just in case.";
            }
            // Hydration advice
            if (temp > (unit === 'celsius' ? 25 : 77)) {
              hydration = "Make sure to drink plenty of water today—aim for at least 2 liters. Stay cool!";
            } else if (temp < (unit === 'celsius' ? 10 : 50)) {
              hydration = "You won't need as much water as on a hot day, but keep a bottle handy.";
            } else {
              hydration = "Regular hydration is fine. Just listen to your body.";
            }
            // Sports advice (specific)
            const sportsList = [
              { name: 'Running', minTemp: 5, maxTemp: 32, maxWind: 25 },
              { name: 'Basketball', minTemp: 10, maxTemp: 30, maxWind: 20 },
              { name: 'Football', minTemp: 8, maxTemp: 30, maxWind: 20 },
              { name: 'Cycling', minTemp: 10, maxTemp: 28, maxWind: 18 },
              { name: 'Tennis', minTemp: 12, maxTemp: 30, maxWind: 15 }
            ];
            let sportsAdvice = [];
            if (code >= 60 && code < 80) {
              sportsAdvice.push("Looks like it's rainy or snowy—probably best to skip outdoor sports today.");
            } else if (wind > 30) {
              sportsAdvice.push("It's very windy, so outdoor sports might not be fun or safe.");
            } else if (temp > (unit === 'celsius' ? 32 : 90)) {
              sportsAdvice.push("It's really hot! Maybe avoid strenuous outdoor sports and stick to something light.");
            } else {
              sportsList.forEach(sport => {
                const min = unit === 'celsius' ? sport.minTemp : sport.minTemp * 1.8 + 32;
                const max = unit === 'celsius' ? sport.maxTemp : sport.maxTemp * 1.8 + 32;
                const windLimit = sport.maxWind;
                if (temp >= min && temp <= max && wind <= windLimit) {
                  sportsAdvice.push(`It's a great day for ${sport.name.toLowerCase()}!`);
                } else {
                  sportsAdvice.push(`Not the best weather for ${sport.name.toLowerCase()}.`);
                }
              });
            }
            sports = sportsAdvice.join(' ');
            return (
              <div className="mt-4 w-full p-5 bg-blue-50 rounded-xl flex flex-col items-center animate-fade-in">
                <div className="text-6xl mb-2">{temp > (unit === 'celsius' ? 25 : 77) ? '☀️' : temp < (unit === 'celsius' ? 10 : 50) ? '❄️' : '⛅'}</div>
                <div className="text-2xl font-bold text-blue-700 mb-1">{selectedCity.label}</div>
                <div className="text-lg text-gray-700 mb-2">Temperature: <span className="font-bold">{temp}°{unit === 'celsius' ? 'C' : 'F'}</span></div>
                <div className="text-md text-gray-600 mb-2">Condition: <span className="font-bold">{condition}</span></div>
                <div className="text-md text-gray-600">Wind Speed: <span className="font-bold">{wind} {unit === 'celsius' ? 'km/h' : 'mi/h'}</span></div>
                {/* AI advice section for current weather */}
                <div className="mt-2 w-full bg-white bg-opacity-70 rounded-lg p-4 shadow-inner flex flex-col gap-2 text-sm text-gray-800">
                  <div className="font-bold text-blue-700 mb-1">Skymate's Advice</div>
                  <div><span className="font-semibold">Clothing:</span> {clothing}</div>
                  <div><span className="font-semibold">Hydration:</span> {hydration}</div>
                  <div><span className="font-semibold">Outdoor Sports:</span> {sports}</div>
                </div>
              </div>
            );
          })()
        )}
        {weather && forecastType === 'hourly' && (
          <div className="mt-4 w-full p-5 bg-blue-50 rounded-xl animate-fade-in">
            <div className="text-2xl font-bold text-blue-700 mb-3">Hourly Forecast</div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-blue-200">
                    <th className="px-2 py-1">Hour</th>
                    <th className="px-2 py-1">Temp ({unit === 'celsius' ? '°C' : '°F'})</th>
                    <th className="px-2 py-1">Wind</th>
                    <th className="px-2 py-1">Code</th>
                  </tr>
                </thead>
                <tbody>
                  {weather.time.map((t, i) => (
                    <tr key={t} className={i % 2 === 0 ? 'bg-blue-50' : ''}>
                      <td className="px-2 py-1">{t.split('T')[1]}</td>
                      <td className="px-2 py-1">{weather.temperature_2m[i]}</td>
                      <td className="px-2 py-1">{weather.windspeed_10m[i]}</td>
                      <td className="px-2 py-1">{weather.weathercode[i]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {/* AI advice function */}
        {weather && forecastType === 'daily' && (
          <div className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 gap-8 animate-fade-in">
            {weather.time.map((t, i) => {
              // AI advice logic
              const maxTemp = weather.temperature_2m_max[i];
              const minTemp = weather.temperature_2m_min[i];
              const wind = weather.windspeed_10m_max[i];
              const code = weather.weathercode[i];
              let clothing = '';
              let hydration = '';
              let sports = '';
              // Clothing advice
              if (maxTemp > (unit === 'celsius' ? 28 : 82)) {
                clothing = 'Wear light, breathable clothes, sunglasses, and a hat.';
              } else if (minTemp < (unit === 'celsius' ? 10 : 50)) {
                clothing = 'Wear warm layers, a jacket, and consider gloves.';
              } else {
                clothing = 'Dress comfortably, maybe a light jacket.';
              }
              // Hydration advice
              if (maxTemp > (unit === 'celsius' ? 25 : 77)) {
                hydration = 'Hydrate frequently, aim for 2-3L of water.';
              } else if (minTemp < (unit === 'celsius' ? 10 : 50)) {
                hydration = 'Hydrate regularly, but less than hot days.';
              } else {
                hydration = 'Normal hydration is fine.';
              }
              // Sports advice (specific)
              const sportsList = [
                { name: 'Running', minTemp: 5, maxTemp: 32, maxWind: 25 },
                { name: 'Basketball', minTemp: 10, maxTemp: 30, maxWind: 20 },
                { name: 'Football', minTemp: 8, maxTemp: 30, maxWind: 20 },
                { name: 'Cycling', minTemp: 10, maxTemp: 28, maxWind: 18 },
                { name: 'Tennis', minTemp: 12, maxTemp: 30, maxWind: 15 }
              ];
              let sportsAdvice = [];
              if (code >= 60 && code < 80) {
                sportsAdvice.push('Rainy or snowy: outdoor sports not recommended.');
              } else if (wind > 30) {
                sportsAdvice.push('Very windy: avoid outdoor sports.');
              } else if (maxTemp > (unit === 'celsius' ? 32 : 90)) {
                sportsAdvice.push('Too hot: avoid strenuous outdoor sports.');
              } else {
                sportsList.forEach(sport => {
                  const min = unit === 'celsius' ? sport.minTemp : sport.minTemp * 1.8 + 32;
                  const max = unit === 'celsius' ? sport.maxTemp : sport.maxTemp * 1.8 + 32;
                  const windLimit = sport.maxWind;
                  if (maxTemp >= min && maxTemp <= max && wind <= windLimit) {
                    sportsAdvice.push(`Great day for ${sport.name}.`);
                  } else {
                    sportsAdvice.push(`Not ideal for ${sport.name}.`);
                  }
                });
              }
              sports = sportsAdvice.join(' ');
              return (
                <div
                  key={t}
                  className="relative bg-gradient-to-br from-blue-300 via-blue-100 to-white rounded-2xl shadow-xl p-6 flex flex-col items-center border-2 border-blue-200 backdrop-blur-md bg-opacity-80 transition-transform duration-300 hover:scale-102 hover:shadow-blue-200/50"
                  style={{
                    boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.18)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <div className="absolute top-4 right-4 text-xl opacity-20">🌈</div>
                  <div className="text-5xl mb-2 drop-shadow-lg">
                    {maxTemp > (unit === 'celsius' ? 25 : 77)
                      ? '☀️'
                      : minTemp < (unit === 'celsius' ? 10 : 50)
                      ? '❄️'
                      : '⛅'}
                  </div>
                  <div className="text-lg font-bold text-blue-800 mb-2 tracking-wide shadow-sm bg-white bg-opacity-30 px-3 py-1 rounded-lg">
                    {new Date(t).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}
                  </div>
                  <div className="flex gap-4 mb-2">
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-500">Max</span>
                      <span className="font-bold text-xl text-blue-900">{maxTemp}°{unit === 'celsius' ? 'C' : 'F'}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-500">Min</span>
                      <span className="font-bold text-xl text-blue-900">{minTemp}°{unit === 'celsius' ? 'C' : 'F'}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-600 font-semibold">💨</span>
                    <span className="text-md text-gray-700 font-bold">{wind} {unit === 'celsius' ? 'km/h' : 'mi/h'}</span>
                  </div>
                  <div className="text-xs text-gray-600 bg-white bg-opacity-20 px-2 py-1 rounded shadow">Code: <span className="font-bold">{code}</span></div>
                  <div className="absolute bottom-4 left-4 text-xl opacity-20">✨</div>
                  {/* AI advice section */}
                  <div className="mt-3 w-full bg-white bg-opacity-50 rounded-lg p-3 shadow-inner flex flex-col gap-2 text-xs text-gray-800">
                    <div className="font-bold text-blue-700 mb-1">AI Advice</div>
                    <div><span className="font-semibold">Clothing:</span> {clothing}</div>
                    <div><span className="font-semibold">Hydration:</span> {hydration}</div>
                    <div><span className="font-semibold">Outdoor Sports:</span> {sports}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="mt-6 text-xs text-gray-500 text-center">Powered by <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer" className="underline">Open-Meteo</a></div>
      </div>
    </div>
  );
}

export default App;
