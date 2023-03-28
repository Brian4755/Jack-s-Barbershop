import Carousel from './Carousel'
import './Home.css'

const Home = () => {
  return ( 
    <>
    <img className='insideshop' src="./insidebarbershop.jpg" alt="Inside Area" />
    <div className='homepageSection2'>
      <h1>"One of the best haircuts I have ever had. Super friendly and nice atmosphere."</h1>
      <Carousel />
      <div className='homeSec2Text'>
        <h2>Manor Texas family owned barbershop bordering Austin</h2>
        <h3>We offer fades, tapers, buzz cuts and many other popular styles.</h3>
      </div>
      <div>
        <h2>Love our service?</h2>
        <h3>If you received a haircut and would like to post a review on our Yelp page, we would greatly appreciate it</h3>
        <button>Yelp Page</button>
      </div>
      <img className='barberself' src="./barberself.jpg" alt="Lead Barber" />
    </div>
    </>
   )
}
 
export default Home