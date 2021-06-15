import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/login";
import Logout from "./components/logout";
import Movies from "./components/movies";
import auth from "./services/authService";

const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => setUser(auth.getCurrentUser()), []);

  return (
    <BrowserRouter>
      <main className="container d-flex align-items-stretch">
        <ToastContainer />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Movies user={user} {...props} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <Login user={user} {...props} />}
          />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
