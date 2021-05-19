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
                Name:<input></input>
                E-mail:<input></input>
                Subject:<input></input>
                Message:<input></input>
            </form>
        </main>
    )
}

export default Contact;