import './css/App.css';
import Search from './components/Search';
import Location from './components/Location';
import CurrentWeather from './components/CurrentWeather';


function App() {
  return (
    <div className="App cold">
      <main>
        <Search />
        <Location/>
        <CurrentWeather />
      </main>
    </div>
  );
}

export default App;
