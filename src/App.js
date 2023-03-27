import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home';
import Location from './Location';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/location' element={<Location />}/>
      {/* <Route path='' element={}/>
      <Route path='' element={}/>
      <Route path='' element={}/> */}
    </Routes >
    </>
  )
}

export default App