import './App.css';
import Search from './components/search/Search';
import { useState, useEffect } from 'react';
import DetailWeather from './components/weatherDetails/DetailWeather';
import { WEATHER_API, WEATHER_API_KEY } from './components/api'
import BasicChart from './components/currentWeather/BasicChart';



function App() {
  const [weatherData, setWeatherData] = useState();

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("worked not")
    }
  }

  function showPosition(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude;

    fetch(`${WEATHER_API}/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&appid=${WEATHER_API_KEY}&units=metric`)
      .then(d => d.json())
      .then((city) => {
        setWeatherData(city)
        // console.log(city);
      });
  }

  useEffect(() => {
    getLocation()
  }, []);

  const handleOnSearchChange = (searchData) => {
    const [lati, longi] = searchData.value.split(" ");
    fetch(`${WEATHER_API}/onecall?lat=${lati}&lon=${longi}&exclude=minutely,alerts&appid=${WEATHER_API_KEY}&units=metric`)
      .then(d => d.json())
      .then((city) => {
        setWeatherData(city)
        // console.log(city);
      });


  }

  return (
    <div className="App">

      <Search onSearchChange={handleOnSearchChange} />
      {/* {weatherData && <DetailWeather data={weatherData} />} */}
      {weatherData && <BasicChart data={weatherData} />}

    </div>
  );
}

export default App;


// useSelector  to get the data
// useDispatch   to dispatch an action