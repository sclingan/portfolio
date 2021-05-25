import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';


function Home(){
    return(
        <main className='Home'>
            <div id='title'>
               Scott Clingan
               Web Developer
           </div>
           <Nav />
        </main>
    )
}

export default Home;