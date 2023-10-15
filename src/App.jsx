
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about_us" element={<AboutUs/>} />

      </Routes>
    
    
    </>
  )
}

export default App
