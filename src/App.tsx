import { DashBoard } from "./pages/Dashboaed"
import { Signin } from "./pages/signin"
import { Signup } from "./pages/Signup"
import { BrowserRouter ,Route,Routes } from "react-router-dom"



function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/dashboard" element={<DashBoard />} />
  </Routes>
  
  </BrowserRouter>

}

export default App
