const ScrollButton = () => {
  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return ( 
    <>
    <button onClick={handleScrollTop}>Up</button>
    </>
   )
}
 
export default ScrollButton