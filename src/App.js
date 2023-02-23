import Search from "./components/Search";
import CurrentCityWeather from "./components/CurrentCityWeather";
import WeatherForSixDays from "./components/WeatherForSixDays";
import CreateBy from "./components/CreateBy";
import "./App.css";

function App() {
  return (
    <div class="container mt-4">
      <Search />
      <CurrentCityWeather />
      <WeatherForSixDays />
      <CreateBy />
    </div>
  );
}

export default App;
