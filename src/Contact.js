import React, {useState} from 'react';
import Nav from './Nav';


function Contact(){
    function log(e){   // find a better way to do this function, get all input info
        e.preventDefault();
        let name = document.getElementById('form_name').value;
        let email = document.getElementById('form_email').value;
        let subject = document.getElementById('form_subject').value;
        let message = document.getElementById('form_message').value;
        //console.log(name + ' ' + email + ' ' + subject + ' ' + message);
    }

        const [name, getName] = useState();
        const [email, getEmail] = useState();
        const [subject, getSubject] = useState();
        const [message, getMessage] = useState();
        
        
    
    return(
        <main className='Contact'>
            <div id='heading'>Contact Me                                                   
                <div id='contact_p'>Please E-mail me with any Questions or inquiries. I would be happy
                 to answer your questions or set up a meeting with you.
                </div>
            </div>
            <form id='contact_form'>
                Name:<input id='form_name' value={name}></input>
                E-mail:<input id='form_email' value={email}></input>
                Subject:<input id='form_subject' value={subject}></input>
                Message:<textarea id='form_message' value={message}></textarea>
                <button id='form_submit' onClick={log}>Send E-mail</button>
            </form>
            <Nav />
        </main>
    )
}

export default Contact;