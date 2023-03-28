import { Link } from "react-router-dom"
import './Nav.css'

const Navbar = () => {
  return ( 
    <nav>
      <Link to='/'><img className="imageIcon" src="./homepagebutton.png" alt="Jack's Barbershop"/></Link>
      <div className="navLinks">
      <Link className="location" to='/location'>Location</Link>
      <Link className="about" to='/about'>About</Link>
      <Link className="contact" to='/contact'>Contact</Link>
      </div>
    </nav>
   )
}
 
export default Navbar