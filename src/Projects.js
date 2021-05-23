import React from 'react';
import './App.css';
import  randomquote from './images/RandomQuoteMachine.png';
import gdp from './images/United_States_GDP.png';
import coffee from './images/Coffee Shop.png';
import drum from './images/Drum Machine.png';
import pomodoro from './images/Pomodoro.png';
import barChart from './images/United_States_Bar_Chart.png';

function Projects(){
    return(
        <main className='Projects'>
         <div id='projects-title'>Projects</div>
         <div id='project_1'>Random Quote Machine<br />
         <img id='project_randomQuote' src={randomquote} alt='Random Quote Generator'></img>
         </div>
         <div id='project_2'>United States GDP<br />
         <img id='project_usGdp' src={gdp} alt='United States GDP'></img>
         </div>
         <div id='project_3'>Coffee Shop<br />
         <img id='project_Coffee' src={coffee} alt='Coffee Shop'></img>
         </div>
         <div id='project_4'>Drum Machine<br />
         <img id='project_drum' src={drum} alt='Drum Machine'></img>
         </div>
         <div id='project_5'><br />
         {/*<img id='project_' src='' alt=''></img>*/}
         </div>
         <div id='project_6'>Pomodoro<br />
         <img id='project_pomodoro' src={pomodoro} alt='Pomodoro'></img>
         </div>
         <div id='project_7'>U.S Bar Char<br />
         <img id='project_usBar' src={barChart} alt='U.S Bar Chart'></img>
         </div>
         <div id='project_8'>More to come<br />
         <img id='project_' src='' alt=''></img>
         </div>
         <div id='project_9'>More to come<br />
         <img id='project_' src='' alt=''></img>
         </div>
        </main>
    )
}

export default Projects;