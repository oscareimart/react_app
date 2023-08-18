import Navbar_ from "./components/Navbar";
import UserLayout from "./layouts/UserLayout";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <>
      <Navbar_ />
      <Routes>
        {routes.map((e, i) => (
          <Route key={i} path={e.path} element={e.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
