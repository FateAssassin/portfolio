import '../styles/contact.css';
import { useState } from 'react';
import validator from 'validator';
import axios from 'axios';
import Alert from './alert';

export default function Contact() {
    
    const [ tab, setTab ] = useState(0);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    const [ nameAlert, setNameAlert ] = useState(false);
    const [ emailAlert, setEmailAlert ] = useState(false);
    const [ messageAlert, setMessageAlert ] = useState(false);

    const [ alertElement, setAlertElement ] = useState("");

    const changeName = (e) => {
        setName(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changeMessage = (e) => {
        setMessage(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === '') {
            setNameAlert(true);
        } else {
            setNameAlert(false);
        }

        if (validator.isEmail(email) === false) {
            setEmailAlert(true);
        } else {
            setEmailAlert(false);
        }

        if (message === '') {
            setMessageAlert(true);
        } else {
            setMessageAlert(false);
        }

        if (name !== '' && validator.isEmail(email) === true && message !== '') {
            axios.post("https://discord.com/api/webhooks/1209632042585686106/WDI21cthzB4NDhewMIgL3kzuIXszNrSou8s4__taB2HUC-lDxU2igVQaym8E5ByBxLNm", {
            content: "<@452570376577220608>",    
            embeds: [
                    {
                        title: "New Message!",
                        description: `**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
                        color: 0x00ff00
                    }
                ]
            }).then(() => {
                setName('');
                setEmail('');
                setMessage('');
                setAlertElement("success");
            })
        }
    }


    return (
        <>
            { alertElement === "success" ? <Alert message='Message sent successfully!' type='success' /> : ""}
            { alertElement === "error" ? <Alert message='An error occured, please try again later!' type='error' /> : ""}
            <div className="contact appearanimate">
                <div className='contact-content'>
                    <div className="contact-headers">
                        <div 
                            className={`contact-header ${tab === 0 ? "active-header" : ""}`}
                            onClick={() => setTab(0)}
                        >
                            Contact
                        </div>
                        <div
                            className={`contact-header ${tab === 1 ? "active-header" : ""}`}
                            onClick={() => setTab(1)}
                        >
                            Socials
                        </div>
                    </div>
                    <hr className='contact-breakline' />
                    <div className={`${tab === 0 ? "contact-form" : "inactive"}`}>
                        <div>
                            <form onSubmit={handleSubmit}>

                                <p className='contact-label'>Name</p>
                                <input className='contact-input' onChange={changeName} type="text" placeholder="John Doe" value={name} /><br/>
                                <p className={`contact-alert ${nameAlert === true ? "" : "contact-transparent"}`}>Please enter a name!</p>

                                <p className='contact-label'>Email</p>
                                <input className='contact-input' onChange={changeEmail} type="email" placeholder="John@Doe.com" value={email} /><br/>
                                <p className={`contact-alert ${emailAlert === true ? "" : "contact-transparent"}`}>Please enter a valid E-Mail address!</p>

                                <p className='contact-label'>Message</p>
                                <textarea className='contact-input' onChange={changeMessage} placeholder="Message" value={message} /><br/>
                                <p className={`contact-alert ${messageAlert === true ? "" : "contact-transparent"}`}>Please enter a message!</p>

                                <button className='contact-button' type='submit'>Send Message</button>

                                <p className='contact-advise'>You will receive a response within 24 hours.</p>
                            </form>
                        </div>
                    </div>
                    <div className={`${tab === 1 ? "contact-socials" : "inactive"}`}>
                        <div>
                            <a href='https://www.github.com/fateassassin'><i className='bi bi-github'></i> | GitHub</a><br/>
                            <a href='https://www.instagram.com/muazugur'><i className='bi bi-instagram'></i> | Instagram</a><br/>
                            <a href='https://www.t.me/muazugur'><i className='bi bi-telegram'></i> | Telegram</a><br/>
                            <a href='https://discord.com/users/452570376577220608'><i className='bi bi-discord'></i> | Discord</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
