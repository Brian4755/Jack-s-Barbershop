import './ScrollButton.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  function handleVisibleScroll() {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 1800){
      setVisible(true)
    } 
    else if (scrolled <= 1800){
      setVisible(false)
    }
  }

  window.addEventListener('scroll', handleVisibleScroll)

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return ( 
    <>
      {
        visible === true &&
        <button id='scrollBtn' className="fab fa-react fa-3x" onClick={handleScrollTop}><FontAwesomeIcon icon={faArrowUp} /></button>
      }
    </>
   )
}
 
export default ScrollButton