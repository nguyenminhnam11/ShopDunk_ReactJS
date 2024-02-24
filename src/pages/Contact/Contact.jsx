import React from 'react';
import './Contact.css'

function Contact(props) {
    return (
        <div className='contact'>
            <div className='address-contact'>
                <div className='map'>
                    
                </div>
                <div className='info'>

                </div>
            </div>
            <div className='send-email'>
                <form>
                    <label></label>
                    <input type="text" />
                </form>
            </div>
        </div>
    );
}

export default Contact;