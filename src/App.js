import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import dotenv from "dotenv";
import "./App.css";

import { Home } from "./pages/Home";
import { Login } from "./components/Login";

dotenv.config();

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/LogIn"
          element={
            <Login
              user={user}
              setUser={setUser}
              setRole={setRole}
              setToken={setToken}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
