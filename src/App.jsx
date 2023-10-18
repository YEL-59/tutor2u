
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about_us" element={<AboutUs/>} />
      <Route path="/contact_us" element={<ContactUs/>} />
      </Routes>
    
    
    </>
  )
}

export default App
