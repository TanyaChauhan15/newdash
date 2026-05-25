import { useState } from "react";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import HR from "./pages/HR";
import Supply from "./pages/Supply";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("home");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() === "admin" && password.trim() === "1234") {
      setLoggedIn(true);
      setPage("home");
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setPage("home");
    setUsername("");
    setPassword("");
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
    return <Sales setPage={setPage} handleLogout={handleLogout} />;
  }

  if (page === "hr") {
  return (
    <HR
      setPage={setPage}
      handleLogout={handleLogout}
    />
  );
  }

  if (page === "supply") {
  return (
    <Supply
      setPage={setPage}
      handleLogout={handleLogout}
    />
  );
  }

  return null;
}