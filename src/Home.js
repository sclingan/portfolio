import React from 'react';
import Nav from './Nav';

function Home(){
    function showNav(){
        document.getElementById('Nav').style.display= 'inline-block';
    }

    function hideNav(){
        document.getElementById('Nav').style.display= 'none';
    }
    return(
        <main className='Home'>
            <Nav />
            <div id='title'>
               Scott Clingan
               Web Developer
           </div>
           <button id='showNav' onMouseOver={showNav} onMouseLeave={hideNav}></button>
        </main>
    )
}

export default Home;