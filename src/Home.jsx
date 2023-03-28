import Carousel from './Carousel'
import './Home.css'

const Home = () => {
  return ( 
    <>
    <img className='insideshop' src="./insidebarbershop.jpg" alt="Inside Area" />
    <div className='homepageSection2'>
    <h1>"One of the best haircuts I have ever had. Super friendly and nice atmosphere."</h1>
    <Carousel />
    <img className='barberself' src="./barberself.jpg" alt="Lead Barber" />
    </div>
    </>
   )
}
 
export default Home