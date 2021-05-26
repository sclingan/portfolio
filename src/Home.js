import React from 'react';
import Nav from './Nav';


function Home(){
    return(
        <main className='Home'>
            <div id='title'>
               Scott Clingan
               Web Developer
           </div>
           <p id='intro'>
               Hi, I'm Scott and I love to code! Being a Web
               Developer is everything to me.
           </p>
           <Nav />
        </main>
    )
}

export default Home;