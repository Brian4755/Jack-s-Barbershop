import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home';
import Location from './Location';
import About from './About';
import Contact from './Contact';
// import Footer from './Footer';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/location' element={<Location />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes >
    {/* <Footer /> */}
    </>
  )
}

export default App