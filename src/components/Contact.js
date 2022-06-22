// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({ source }) => {
    return (
        <div className='contact'>
            <div className='profile'>
            <img className="Contact_Name" src={source.photo} alt={source.name} />
                <div className='Content'>
                    <p className='Contact_Name'>{source.name}</p>
                    <p className='Contact_Phone'>{source.phone}</p>
                    <p className='Contact_Email'>{source.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;