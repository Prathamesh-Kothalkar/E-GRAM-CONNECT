import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import AdminLogin from './Component/Forms/AdminLogin';
import AdminSignup from './Component/Forms/AdminSignup';
import Login from './Component/Forms/Login';
import Signup from './Component/Forms/Signup';
import Navbar from './Component/Navigation/Navbar';
import Home from './Component/Home/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/adminsignup' element={<AdminSignup/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
