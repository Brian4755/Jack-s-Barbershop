import { useCallback, useState, useEffect } from "react";
import './Carousel.css'

const Carousel = () => {
  const [carousel, setCarousel] = useState(1)

  const increment = useCallback(() => {
    setCarousel(carousel*-1)
  }, [carousel])

  useEffect(() => {
    const id = setTimeout(increment, 5000)
    return () => clearTimeout(id)
  }, [increment])

  return ( 
    <>
    {carousel === 1 ?
    <img className="examples" src="./example1.jpg" alt="examplecut1" /> :
    <img className="examples" src="./example2.jpg" alt="examplecut2" />
    }
    </>
   )
}
 
export default Carousel;