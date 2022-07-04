import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Menu from "./pages/Menu/Menu";
// import Admin from "./pages/Admin/Admin";
import Layout from "./components/Layout";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        {/* <Route path="menu" element={<Menu />} />
        <Route path="admin" element={<Admin />} /> */}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
