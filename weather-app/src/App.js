import { useEffect, useState } from 'react';
import './css/App.css';
import Search from './components/Search';
import Location from './components/Location';
import CurrentWeather from './components/CurrentWeather';


function App() {

  const API_KEY = process.env.REACT_APP_API_KEY
  
  const [city, setCity] = useState('Crested Butte')
  const [search, setSearch] = useState('')
  const [temp, setTemp] = useState('')
  const [unit, setUnit] = useState('°F')
  const [metric, setMetric] = useState()

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
    .then(res => res.json())
    .then((weather) => {
      setTemp(weather['main']['temp'])
    })
  }, [city])

  useEffect(() => {
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then((weather) => {
      setMetric(weather['main']['temp'])
    })
  }, [unit])


  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setCity(search)
    }}

  function handleOnChange(e) {
    setSearch(e.target.value)
  }

  function handleOnClick(e) {
    setUnit(e.target.value)
  }

  function imperialOrMetric() {
    if (unit==="°C") {
      return metric
    } else {
      return temp
    }
  }
  return (
    <div className={temp >= 55 ? 'App' : 'App cold'}>
      <main>
        <Search handleOnChange={handleOnChange} handleKeyPress={handleKeyPress}/>
        <Location city={city}/>
        <CurrentWeather temp={imperialOrMetric()} metric={unit} handleOnClick={handleOnClick}/>
      </main>
    </div>
  );
}

export default App;
