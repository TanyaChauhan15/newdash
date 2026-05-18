import "../App.css";

export default function Login({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
}) {
  return (
    <div className="login-page">
      <div className="login-card">

        <img
          src="/assets/reliance-logo.png"
          alt="Reliance Logo"
          className="login-logo"
        />

        <h2>Welcome Back</h2>

        <p className="subtitle">
          Sign in to access RCPL Dashboard Portal
        </p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <span className="demo-text">
          Demo Credentials : admin / 1234
        </span>

      </div>
    </div>
  );
}