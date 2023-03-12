import Search from "./components/Search";
import CreateBy from "./components/CreateBy";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Kyiv" />
        <CreateBy />
      </div>
    </div>
  );
}

export default App;
