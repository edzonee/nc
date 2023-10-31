import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import FAQ from "./Views/FAQ";
import AboutCyprus from "./Views/AboutCyprus";
import ToDo from "./Views/ToDo";
import AboutUs from "./Views/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/about" element={<AboutCyprus />}></Route>
          <Route path="/todo" element={<ToDo />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
