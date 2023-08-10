import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { WeatherContext } from './contexts/context';
import Data from './components/Data/Data';
import ForeCast from './components/ForeCast/ForeCast';
import Credit from './components/Credit/Credit';
import bg from "./assets/pero-kalimero-9BJRGlqoIUk-unsplash.jpg"

function App() {
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});
  const [locationName, setLocationName] = useState("")
  const [forecast, setForecast] = useState({})
  // const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json';

  // console.log(location);

  // axios.request(foreCastOptions).then(({ data }) => console.log(data))

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (location.latitude) {
      const foreCastOptions = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: { q: location.latitude + "," + location.longitude },
        headers: {
          'X-RapidAPI-Key': '7c53b078acmsh122d83ecbdece92p145375jsnca77b4f04b1d',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        }
      };

      // console.log(location);

      axios.request(foreCastOptions).then(({ data }) => setForecast(data.forecast))
      axios.get(`https://nominatim.openstreetmap.org/search.php?q=${location.latitude}%2C${location.longitude}&polygon_geojson=1&format=jsonv2`).then(({ data }) => setLocationName(data[0].display_name))
    }
  }, [location.latitude, location.longitude])


  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: `${location.latitude},${location.longitude}` },
      headers: {
        'X-RapidAPI-Key': '7c53b078acmsh122d83ecbdece92p145375jsnca77b4f04b1d',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    if (location.latitude) {
      axios.request(options).then(({ data }) => setCurrent(data.current))
    }
  }, [location.latitude, location.longitude])

  return (
    <WeatherContext.Provider value={{ current, forecast, locationName }}>
      <div className={`bg-cover h-screen bg-no-repeat text-white ${current.is_day ? "bg-white" : "bg-gray-800 text-white"}`} style={{ backgroundImage: `url(${bg})` }}>
        <Data />
        <ForeCast />
        <Credit />
      </div>
    </WeatherContext.Provider>
  )
}

export default App
