import React from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

function Nav(){
    return(
        <main className='Nav'>
           <h1>Nav</h1>
           <ul>
               <Router>
               <Link to='./About'>About</Link>
               </Router>
           </ul>
        </main>
    )
}

export default Nav;