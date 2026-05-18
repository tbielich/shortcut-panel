export const shortcuts = [
  {
    id: "pi-shutdown",
    label: "Pi ausschalten",
    description: "Fährt den Raspberry Pi herunter",
    icon: "⏻",
    shortcutName: "Pi ausschalten",
    category: "Raspberry Pi"
  },
  {
    id: "pi-restart",
    label: "Pi neustarten",
    description: "Startet den Raspberry Pi neu",
    icon: "↻",
    shortcutName: "Pi neustarten",
    category: "Raspberry Pi"
  },
  {
    id: "mac-lock",
    label: "Mac sperren",
    description: "Sperrt den Mac über Shortcut",
    icon: "🔒",
    shortcutName: "Mac sperren",
    category: "Mac"
  }
];

// Weather API Configuration
export const weatherConfig = {
  // Using Open-Meteo API (free, no API key required, CORS enabled)
  apiProvider: "open-meteo",
  apiUrl: "https://api.open-meteo.com/v1/forecast",
  
  // Default location (latitude, longitude)
  defaultLocation: {
    name: "Berlin",
    latitude: 52.52,
    longitude: 13.405
  },
  
  // Geocoding API for location search (free, no API key required)
  geocodingUrl: "https://geocoding-api.open-meteo.com/v1/search",
  
  // Weather parameters to fetch
  weatherParams: {
    latitude: 52.52,
    longitude: 13.405,
    current: "temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",
    hourly: "temperature_2m,precipitation,weather_code",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max",
    timezone: "auto"
  }
};

// Weather code to description mapping (WMO Weather interpretation codes)
export const weatherCodeMap = {
  0: { description: "Klar", icon: "☀️" },
  1: { description: "Überwiegend klar", icon: "🌤" },
  2: { description: "Teilweise bewölkt", icon: "⛅" },
  3: { description: "Bewölkt", icon: "☁️" },
  45: { description: "Neblig", icon: "🌫" },
  48: { description: "Bereift Neblig", icon: "🌫" },
  51: { description: "Nieselregen", icon: "🌧" },
  53: { description: "Nieselregen", icon: "🌧" },
  55: { description: "Starker Nieselregen", icon: "🌧" },
  61: { description: "Regen", icon: "🌧" },
  63: { description: "Regen", icon: "🌧" },
  65: { description: "Starker Regen", icon: "⛈" },
  71: { description: "Schneefall", icon: "❄️" },
  73: { description: "Schneefall", icon: "❄️" },
  75: { description: "Starker Schneefall", icon: "❄️" },
  77: { description: "Schneegranupeln", icon: "❄️" },
  80: { description: "Regenschauer", icon: "🌧" },
  81: { description: "Regenschauer", icon: "⛈" },
  82: { description: "Starker Regenschauer", icon: "⛈" },
  85: { description: "Schneeschauer", icon: "❄️" },
  86: { description: "Starker Schneeschauer", icon: "❄️" },
  95: { description: "Gewitter", icon: "⛈" },
  96: { description: "Gewitter mit Hagel", icon: "⛈" },
  99: { description: "Gewitter mit Hagel", icon: "⛈" }
};
