import React from 'react';
import {Link} from 'react-router-dom';


function Home(){
    return(
        <main className='Home'>
            <div id='title'>
               Scott Clingan
               Web Developer
           </div>
           <div id='Nav'>
              <ul>
                  <Link to='/'><li>Home</li></Link>
                  <Link to='/About'><li>About</li></Link>
                  <Link to='/Contact'><li>Contact</li></Link>
                  <Link to='/Projects'><li>Projects</li></Link>
              </ul>
        </div>
        </main>
    )
}

export default Home;