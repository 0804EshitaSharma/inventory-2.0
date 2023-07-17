import Home from "./components/Home.js";
import About from "./components/About.js";
import AddItem from "./components/AddItem.js";
import Manufacturer from "./components/Manufacturer.js";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Learned from https://www.youtube.com/watch?v=AlNF_ED9s7Y&list=PLwGdqUZWnOp1bMwGTJVaQmdwbmX61iceM&index=3  */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/add" element={<AddItem />}></Route>
          <Route path="/manufacturer/:name" element={<Manufacturer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
