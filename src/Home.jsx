import Carousel from './Carousel'
import './Home.css'

const Home = () => {
  return ( 
    <>
    <img className='insideshop' src="./insidebarbershop.jpg" alt="Inside Area" />
    <h1>"One of the best haircuts I have ever had. Super friendly and nice atmosphere."</h1>
    {/* <img src="./example1.jpg" alt="examplecut1" />
    <img src="./example2.jpg" alt="examplecut2" /> */}
    <Carousel />
    </>
   )
}
 
export default Home