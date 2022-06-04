import React from 'react'
import "./About.css";


const About = () => {
  return (
    <>
    {/* <!-- About Section  --> */}

{/* <!-- Jumbotron is used to organize the container  --> */}
<div className="jumbotron about-container">

    <header className="section-header">
        <h2 className='text-center'>About Us</h2>
    </header>

    {/* <!-- About text  --> */}
    <p className="about-text text-center py-2" data-aos="zoom-in">The Pizza Vista is one of the leading fast-food chains and is widely known for Style Pizzas which comes in a variety of flavors. We serve various kinds of exceptionally delicious deep small, medium, large pizza, also we have veg and nonveg variety. Pizza has a long history. Flatbreads with toppings were consumed by the ancient Egyptians, Romans and Greeks. The latter ate a version with herbs and oil, similar to today's focaccia. But the modern birthplace of pizza is southwestern Italy's Campania region, home to the city of Naples.</p>


</div>
    </>
  )
}

export default About