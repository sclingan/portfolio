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
               Developer is my main goal in life.      {/* fix the copy sounds too needy */}
           </p>
           {/*<Nav />*/}
        </main>
    )
}

export default Home;