import React, {useState} from 'react';
import Nav from './Nav';


function Contact(){

    function logData(e){  // setup either emailJS or MailChimp or something similar
        e.preventDefault();
        console.log(name + '\n' + email + '\n' + subject + '\n' + message);
    }

        const [name, getName] = useState('');
        const [email, getEmail] = useState('');
        const [subject, getSubject] = useState('');
        const [message, getMessage] = useState('');
        
    return(
        <main className='Contact'>
            <div id='heading'>Contact Me                                                   
                <div id='contact_p'>Please E-mail me with any Questions or inquiries. I would be happy
                 to answer your questions or set up a meeting with you.
                </div>
            </div>
            <form id='contact_form'>
                Name:<input id='form_name' value={name} onChange={event => getName(event.target.value)}></input>
                E-mail:<input id='form_email' value={email} onChange={event => getEmail(event.target.value)}></input>
                Subject:<input id='form_subject' value={subject} onChange={event => getSubject(event.target.value)}></input>
                Message:<textarea id='form_message' value={message} onChange={event => getMessage(event.target.value)}></textarea>
                <button id='form_submit' onClick={logData}>Send E-mail</button>
            </form>
            <Nav />
        </main>
    )
}

export default Contact;