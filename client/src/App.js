import { Routes, Route } from 'react-router-dom';
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
        <Route exact path="/" element={<Home />} />

        <Route path="/posts" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Single />} />

        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
