import logo from './logo.svg';
import './App.css';
import StatefulGreeting from "./components/StatefulGreeting";

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I'm a stateful class component!" name="Gogo" />
    </div>
  );
}

export default App;
