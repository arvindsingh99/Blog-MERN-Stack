import React, { useContext } from 'react'
import TopBar from './Components/TopBar/TopBar'
import HomePage from './Pages/HomePage/HomePage'
import Single from './Pages/Single/Single'
import Write from './Pages/Write/Write'
import Settings from './Pages/Settings/Settings'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { Context } from './context/Context'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Login />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Login />}
        </Route>
        <Route path="/login">
          {user ? <HomePage /> : <Login />}
        </Route>
        <Route path="/register">
          {user ? <HomePage /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
