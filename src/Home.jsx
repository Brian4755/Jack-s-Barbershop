import Carousel from './Carousel'
import './Home.css'

const Home = () => {
  return ( 
    <>
    <img className='insideshop' src="./insidebarbershop.jpg" alt="Inside Area" />
    <h1>"One of the best haircuts I have ever had. Super friendly and nice atmosphere."</h1>
    <Carousel />
    </>
   )
}
 
export default Home