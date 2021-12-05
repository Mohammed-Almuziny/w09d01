import { Routes, Route } from "react-router";
import dotenv from "dotenv";
import "./App.css";

import { Home } from "./pages/Home";

dotenv.config();

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
