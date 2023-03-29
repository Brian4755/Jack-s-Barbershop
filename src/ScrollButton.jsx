import './ScrollButton.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)
  const [inverse, setInverse] = useState(false)

  function handleVisibleScroll() {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 1800){
      setVisible(true)
    } 
    else if (scrolled <= 1800){
      setVisible(false)
    }
  }

  function handleInverseVisible() {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 2250){
      setInverse(true)
    } 
    else if (scrolled <= 2250){
      setInverse(false)
    }
  }

  window.addEventListener('scroll', handleVisibleScroll)
  window.addEventListener('scroll', handleInverseVisible)

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return ( 
    <>
      {
        visible === true && inverse === false &&
        <button id='scrollBtn' className="fab fa-react fa-3x" onClick={handleScrollTop}><FontAwesomeIcon icon={faArrowUp} /></button>
      }
      {
        visible === true && inverse === true &&
        <button id='scrollBtnInv' className="fab fa-react fa-3x" onClick={handleScrollTop}><FontAwesomeIcon icon={faArrowUp} /></button>
      }
    </>
   )
}
 
export default ScrollButton