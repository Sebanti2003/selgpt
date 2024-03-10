import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Login from "./Login";


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Login/>}/>

      <Route path="/home" element={<Mainpage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
