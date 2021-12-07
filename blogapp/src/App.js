import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import { NavBar } from "./components/Navbar/NavBar";
import { Single } from "./Pages/single/Single";
import Write from "./Pages/write/Write.jsx";
import { Setting } from "./Pages/settings/Setting";
import { Login } from "./Pages/login/Login";
import { Register } from "./Pages/register/Register";



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" component={Home} />

        <Route path="/posts" component={Home} />

        <Route path="/register" component={Register} />

        <Route path="/login" component={Login} />
        <Route path="/post/:id" component={Single} />

        <Route path="/write" component={Write} />
        <Route path="/settings" component={Setting} />
      </Routes>
    </>
  );
}

export default App;
