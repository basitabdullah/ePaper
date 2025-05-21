import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import Viewer from "./pages/Viewer/Viewer"
import "./styles/global.css"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/viewer/:id" element={<Viewer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App