import Home from "./components/Home.js";
import About from "./components/About.js";
import Form from "./components/Form.js";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/add" element={<Form />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
