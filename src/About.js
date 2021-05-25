import React from 'react';
import Nav from './Nav';

function About(){
    return(
        <main id='About'>
        <div id='about_title'>
            About Me
        </div>
        <div id='about_p2'>  {/* write copy for about and home page */}
            This is just a test paragraph to see how well the 
            text shows up against the background.
        </div>
        <Nav />
        </main>
    )
}

export default About;