import Search from "./components/Search";
import WeatherForSixDays from "./components/WeatherForSixDays";
import CreateBy from "./components/CreateBy";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Kyiv" />
        <WeatherForSixDays />
        <CreateBy />
      </div>
    </div>
  );
}

export default App;
