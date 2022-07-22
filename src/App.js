import './App.css';
import Search from './components/search/Search';
import { useState, useEffect } from 'react';
import DetailWeather from './components/weatherDetails/DetailWeather';
import { WEATHER_API, WEATHER_API_KEY } from './components/api'



function App() {
  const [weatherData, setWeatherData] = useState(null);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("worked not")
    }
  }

  function showPosition(position) {
    // x.innerHTML = "Latitude: " + position.coords.latitude +
    //     "<br>Longitude: " + position.coords.longitude;
    // let lati = position.coords.latitude
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude;

    console.log(latitude, longitude);

    fetch(`${WEATHER_API}/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&appid=${WEATHER_API_KEY}&units=metric`)
      .then(d => d.json())
      .then((city) => {
        setWeatherData(city)
        console.log(city);
      });

  }

  useEffect(() => {

    getLocation()

  }, []);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    console.log(lat,lon);
    setWeatherData("hello from search bar")
    fetch(`${WEATHER_API}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${WEATHER_API_KEY}&units=metric`)
      .then(d => d.json())
      .then((city) => {
        setWeatherData(city)
        console.log(city);
      });
    // console.log(searchData)
  }
  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      <DetailWeather data={weatherData} />


    </div>
  );
}

export default App;


// useSelector  to get the data
// useDispatch   to dispatch an action