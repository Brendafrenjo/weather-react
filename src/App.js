import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React</h1>
        <Weather city="Nairobi" />
        <Weather city="Mombasa" />
      </header>
    </div>
  );
}

export default App;
