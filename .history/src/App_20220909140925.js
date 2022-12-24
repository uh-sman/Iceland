import logo from "./logo.svg";
import "./App.css";
import { Topnav } from "./components/Topnav";
import { FullNav } from "./components/FullNav";
import { Body } from "./Body";
import { Mainfooter } from "./components/Mainfooter";

function App() {
  return (
    <div className="App">
      <FullNav />
      <Body />
      <div className="">
        <Mainfooter />
      </div>
    </div>
  );
}

export default App;
