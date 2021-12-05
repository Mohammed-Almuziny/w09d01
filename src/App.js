import { useState } from "react";
import { Routes, Route } from "react-router";
import dotenv from "dotenv";
import "./App.css";

import { Home } from "./pages/Home";
import { Login } from "./components/Login";

dotenv.config();

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          exact
          path="/LogIn"
          element={<Login user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
