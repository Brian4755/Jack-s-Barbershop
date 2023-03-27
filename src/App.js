import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      {/* <Route path='' element={}/>
      <Route path='' element={}/>
      <Route path='' element={}/>
      <Route path='' element={}/> */}
    </Routes >
    </>
  )
}

export default App