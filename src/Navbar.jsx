import { Link } from "react-router-dom"

const Navbar = () => {
  return ( 
    <>
      <Link to='/'>Home</Link>
      <Link to='/location'>Location</Link>
      <Link to='/about'>About</Link>
    </>
   )
}
 
export default Navbar