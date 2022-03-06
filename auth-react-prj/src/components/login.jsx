import React, { useCallback, useState, memo } from "react";
import { Redirect } from "react-router-dom";
import auth from "../services/authService";

const Login = ({ user }) => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inProgress, setInProgress] = useState(false);

  const login = useCallback(async () => {
    setInProgress(true);
    try {
      await auth.login(username, password);
      window.location = "/";
    } catch (ex) {
      const {
        data: { message: errorMessage },
      } = ex;
      setError(errorMessage);
    } finally {
      setInProgress(false);
    }
  }, [username, password]);

  return user ? (
    <Redirect to="/" />
  ) : (
    <div className="col-sm-7 col-12">
      <h1 className="mb-3 font-weight-normal">Login</h1>
      <div className="alert alert-info">
        <p>
          username: <b>negar</b>
          <br />
          password: <b>negar@123</b>
        </p>
      </div>
      <form name="form">
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="form-group">
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            className="form-control"
            placeholder="Username"
            autoComplete="none"
            autoFocus
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            disabled={!username || !password || inProgress}
            className="btn btn-lg btn-primary btn-block"
            onClick={() => login()}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(Login);
