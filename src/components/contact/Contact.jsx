import React,{useState} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = (props) => {


    const [user_name, setName] = useState('');
    const [user_email, setEmail] = useState('');
    const [user_subject, setSubject] = useState('');
    const [user_message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'service_d25i40a';
        const templateId = 'template_wzvgjbp';
        const publicKey = 'NSbjzeGfVDYriCY0I';

        const templateParams = {
            from_subject: user_subject,
            from_name : user_name,
            from_email: user_email,
            to_name : 'Harshavardhan',
            message : user_message, 
        }

        

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Message sent!', response);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            Swal.fire({
                position: "top-end",
                title: "Message Sent!",
                text: "Success",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
              });
        })
        .catch((error) => {
            console.error('Error sending email: ', error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showConfirmButton: false,
                timer: 2000
              });
        });

        
    }

    

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch!</h2>
            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">Don't like forms? Send me an Email. </p>
                </div>

                <form className="contact__form" onSubmit={sendEmail}>

                    <div className="contact__form-group">
                        
                        <div className="contact__form-div">
                        <input type="text" name="user_name" value={user_name} onChange={(e) => setName(e.target.value)}
                         className="contact__form-input" placeholder='Insert your name' required/>
                        </div>

                        <div className="contact__form-div">
                            <input type="email" name='user_email' value={user_email} onChange={(e) => setEmail(e.target.value)}
                             className="contact__form-input" placeholder='Insert your email' required/>
                        </div>

                    </div>
                        
                        
                        <div className="contact__form-div">
                            <input type="text" name='user_subject' value={user_subject} onChange={(e) => setSubject(e.target.value)}
                             className="contact__form-input" placeholder='Insert your subject' required/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea name="user_message" id="" cols="30" rows="10" value={user_message} onChange={(e) => setMessage(e.target.value)}
                             className="contact__form-input" placeholder='Write your message.' required></textarea>
                        </div>
                        
                    
                    <button className="btn contact__button">Send Message</button>
                    
                </form>
            </div>
        </section>
    );
}

export default Contact;