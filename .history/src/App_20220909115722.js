import logo from "./logo.svg";
import "./App.css";
import { Topnav } from "./components/Topnav";
import { FullNav } from "./components/FullNav";
import { Body } from "./Body";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App overflow-hidden">
      <FullNav />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
