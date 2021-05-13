import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <main className='Nav'>
           <ul>
               
               <Link to='/About'><li>About</li></Link>
               <Link to='/Projects'><li>Projects</li></Link>
               
           </ul>
        </main>
    )
}

export default Nav;