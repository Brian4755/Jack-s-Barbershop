import { Link } from "react-router-dom"

const Navbar = () => {
  return ( 
    <nav>
      <Link to='/'><img className="imageIcon" src="./homepagebutton.png" alt="Jack's Barbershop"/></Link>
      <Link className="location" to='/location'>Location</Link>
      <Link className="about" to='/about'>About</Link>
      <Link className="contact" to='/contact'>Contact</Link>
    </nav>
   )
}
 
export default Navbar