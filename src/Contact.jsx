import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { fa9 } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return ( 
    <div className='contactInfo'>
      <h1 className="contactUs">Contact Us</h1>
      <div className='contactIcon'>
      <FontAwesomeIcon className="fab fa-react fa-5x" style={{color: '#FF8236'}} icon={faAddressBook} />
      </div>
      <div className='contactDetails'>
      <p>Number : </p>
      <p>(512)906-9870</p>
      <p>FaceBook : </p>
      <p><a target='_blank' rel='noreferrer' href="https://www.facebook.com/people/Jacks-Barber-Shop/100057022047131/">
      <img className='facebookIcon' src="./facebookIcon.png" alt="Facebook Icon" />
      </a></p>
      </div>
    </div>
   )
}
 
export default Contact