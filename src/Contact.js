import React from 'react';


function Contact(){
    return(
        <main className='Contact'>
            <div id='heading'>Contact Me                                                   
                <div id='contact_p'>Please E-mail me with any Questions or inquiries. I would be happy
                 to answer your questions or set up a meeting with you.
                </div>
            </div>
            <form id='contact_form'>
                Name:<input id='form_name'></input>
                E-mail:<input id='form_email'></input>
                Subject:<input id='form_subject'></input>
                Message:<textarea id='form_message'></textarea>
                <button id='form_submit'>Send E-mail</button>
            </form>
        </main>
    )
}

export default Contact;