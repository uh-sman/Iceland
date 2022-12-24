import logo from "./logo.svg";
import "./App.css";
import { Topnav } from "./components/Topnav";
import { FullNav } from "./components/FullNav";
import { Body } from "./Body";

function App() {
  return (
    <div className="App">
      <FullNav />
      <Body />
    </div>
  );
}

export default App;
