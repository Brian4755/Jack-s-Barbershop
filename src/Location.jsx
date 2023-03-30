import './Location.css'

const Location = () => {
  return ( 
    <div className="locationPage">
    <h1 className='address'>Address: 203 W Murray Ave, Manor, TX 78653</h1>
    <iframe className='googleMap' title="Jack's Barbershop" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55092.71854519673!2d-97.56425886574812!3d30.342567534207383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644c752cf4768a9%3A0x7bc4edb596982389!2sJack&#39;s%20barber%20shop!5e0!3m2!1sen!2sus!4v1680191385755!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
   )
}
 
export default Location