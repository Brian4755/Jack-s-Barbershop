import './About.css'

const About = () => {
  return ( 
    <div className='aboutPage'>
      <img className="aboutImage" src="./AboutImage.jpg" alt="Barber Shaving Customer" />
      <div className='aboutUsText'>
        <h1 className='aboutUsTitle'>Where We Started</h1>
        <p className='aboutUsDetails'>We are a proud, family owned barbershop in Manor and first opened in 2018. With over 15 years of experience, we finally decided to open our own business. Still in 2023, we are open and have been cutting hair for customers surrounding Austin.</p>
      </div>
    </div>
   )
}
 
export default About