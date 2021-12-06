import { Home } from "./Pages/Home/Home";
import { NavBar } from "./components/Navbar/NavBar";
import { Single } from "./Pages/single/Single";
import { Write } from "./Pages/write/Write";
import { Setting } from "./Pages/settings/Setting";


function App() {
  return (
    <>
      <NavBar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      <Setting />
    </>
  );
}

export default App;
