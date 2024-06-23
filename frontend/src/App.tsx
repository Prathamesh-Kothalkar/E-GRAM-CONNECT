import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import AdminLogin from './Component/Forms/AdminLogin';
import AdminSignup from './Component/Forms/AdminSignup';
import Login from './Component/Forms/Login';
import Signup from './Component/Forms/Signup';
import Navbar from './Component/Navigation/Navbar';
import Home from './Component/Home/Home';
import Members from './Component/Members/Members';
import Footer from './Component/Footer/Footer';
import Complaint from './Component/Complaint/Complaint';
import { IsLoginProvider } from './Context/IsLoginContext';
import Project from './Component/Project/Project';
function App() {
  return (
    <>
    <IsLoginProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/adminsignup' element={<AdminSignup/>}/>
          <Route path='/members' element={<Members/>}/>
          <Route path='/complaint' element={<Complaint/>}/>
          <Route path='/projects' element={<Project/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </IsLoginProvider>
    </>
  )
}

export default App
