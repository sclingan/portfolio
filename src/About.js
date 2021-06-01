import React from 'react';
import Nav from './Nav';

function About(){
    return(
        <main id='About'>
        <div id='about_title'>
            About Me
        </div>
        <div id='about_p2'>  {/* write copy for about and home page, maybe add tools used? */}
               I searched over half my life to find my
            passion, web development and coding! I have worked in construction, sales,
            warehouse and as a delivery driver. While I am still working a 9-5 job, I 
            code as much as I can in my off hours. It is slow going being self taught,
            but I enjoy learning and coding all that I can.
              <p id='about_p3'>I am also working on design, using fonts, sizes and colors to explore new 
            ideas. Clean and simple design while being both functional and practical 
            are my goals.</p>
        </div>
        <Nav />
        </main>
    )
}

export default About;