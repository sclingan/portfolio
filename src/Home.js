import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';


function Home(){
    function show_hide(){
        document.getElementById('Nav').style.display= 'inline-block';
        document.getElementById('title').style.gridColumnStart= 1;
        document.getElementById('title').style.paddingLeft= '20px';
    }
    return(
        <main className='Home'>
            <Nav />
            <div id='title'>
               Scott Clingan
               Web Developer
           </div>
           <p id='test' onMouseOver={show_hide}>*</p>
        </main>
    )
}

export default Home;