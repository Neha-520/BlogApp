import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import { NavBar } from "./components/Navbar/NavBar";
import { Single } from "./Pages/single/Single";
import Write from "./Pages/write/Write.jsx";
import { Setting } from "./Pages/settings/Setting";
import { Login } from "./Pages/login/Login";
import { Register } from "./Pages/register/Register";
import { useContext } from 'react';
import { Context } from './context/Context';



function App() {

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  const { user } = useContext(Context);
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:id" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
