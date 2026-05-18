import { useState } from "react";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";

import Sales from "./pages/Sales";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("home");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  if (!loggedIn) {
    return (
      <Login
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    );
  }

  if (page === "home") {
  return <Home setPage={setPage} />;
}

if (page === "sales") {
  return <Sales setPage={setPage} />;
}

return null;
}