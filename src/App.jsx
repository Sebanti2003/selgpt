import { BrowserRouter, HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Login from "./Login";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Mainpage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
