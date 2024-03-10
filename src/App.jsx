import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import Login from "./Login";


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Navigate to={'/login'}/>}/>
      <Route path="/login" element={<Login/>}/>
      
      <Route path="/home" element={<Mainpage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;