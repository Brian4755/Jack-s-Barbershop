import './ScrollButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ScrollButton = () => {
  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return ( 
    <>
    <button id='scrollBtn' className="fab fa-react fa-3x" onClick={handleScrollTop}><FontAwesomeIcon icon={faArrowUp} /></button>
    </>
   )
}
 
export default ScrollButton