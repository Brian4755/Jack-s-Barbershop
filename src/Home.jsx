import Carousel from './Carousel'
import ExampleCuts from './ExampleCuts'
import './Home.css'

const Home = () => {
  function handleClick(e) {
    e.preventDefault()
    window.open('https://www.yelp.com/biz/jacks-barber-shop-manor', '_blank')
  }
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
        <button onClick={handleClick}>Yelp Page</button>
      </div>
      <img className='barberself' src="./barberself.jpg" alt="Lead Barber" />
      <img className='barberStation' src="./barberstations.jpg" alt="Barber Stations" />
      <div>
        <h2>Hours of Operation:</h2>
        <table>
          <tr>
            <td>Monday</td>
            <td>Closed</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>9:00AM - 7:00PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>9:00AM - 6:00PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>9:00AM - 7:00PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>9:00AM - 7:00PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>9:00AM - 7:00PM</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Closed</td>
          </tr>
        </table>
      </div>
    </div>
    <div className='facebookSecBackground'>
      <div className='facebookSection'>
        <h4>Checkout our Facebook page</h4>
        <ExampleCuts />
      </div>
    </div>
    </>
   )
}
 
export default Home