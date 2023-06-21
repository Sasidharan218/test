import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Profile = ({ isLoggedIn }) => {
  return (
    <div>
      <h2>Profile</h2>
      {isLoggedIn ? (
        <p>Welcome to your profile page!</p>
      ) : (
        <Navigate to="/" replace />
      )}
    </div>
  );
};

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LoginForm handleLogin={handleLogin} />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile isLoggedIn={isLoggedIn} /> : <Navigate to="/" replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Login;
