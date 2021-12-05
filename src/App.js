import { Routes, Route } from "react-router";
import "./App.css";

import { Home } from "./Pages/Home.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
