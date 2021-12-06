import { Switch, Route } from 'react-router-dom';
import { Home } from "./Pages/Home/Home";
import { NavBar } from "./components/Navbar/NavBar";
import { Single } from "./Pages/single/Single";
import { Write } from "./Pages/write/Write";
import { Setting } from "./Pages/settings/Setting";
import { Login } from "./Pages/login/Login";
import { Register } from "./Pages/register/Register";



function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login"> <Login /></Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write"><Write /></Route>
        <Route path="/settings">
          <Setting />
        </Route>
      </Switch>
    </>
  );
}

export default App;
