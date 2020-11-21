import React, { useState, Fragment } from 'react'
import { toast } from 'react-toastify'

const ContactForm = ({language}) => {
    const [values, setValues] = useState({
        email: '',
        message: '',
        subject: ''
    })
    const [checked, setChecked] = useState(false)
    const { email, message, subject } = values

    const handleChange = e => {
        if (e.target.value !== "") {
            e.target.parentNode.classList.add('active-input')
            /* if (e.target.value.includes('$')) {
                e.target.classList.add('border-danger')
            } */
        }
        else if (e.target.value === "") {
            e.target.parentNode.classList.remove('active-input')
        }

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const sendEmail = async (e) => {
        e.preventDefault()
        await fetch(`${process.env.REACT_APP_REST_ENDPOINT}/emailToMe`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(response => {
            setValues({
                email: '',
                subject: '',
                message: ''
            })
            setChecked(false)
            var inputEmail = document.getElementsByClassName("inputEmail")
            var inputSubject = document.getElementsByClassName("inputSubject")
            var inputMessage = document.getElementsByClassName("inputMessage")
            inputEmail[0].classList.remove('active-input')
            inputSubject[0].classList.remove('active-input')
            inputMessage[0].classList.remove('active-input')
            toast.success('Votre message à bien été envoyé')
        })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <Fragment>
                <h1 className="text-white">M'envoyer un Email</h1>
            <form
                className="contact-form"
                onSubmit={sendEmail}
            >
                <div className="inputEmail">
                
                <label htmlFor="emailContactForm" className="lead">
                    {language==="fr" && ("Votre Adresse Email:")}
                {language==="en" && ("Your email address:")}
                </label>
                    <input
                        className="inputAnim w-100 active text-white"
                        type="email"
                        name="email"
                        value={email}
                        id="emailContactForm"
                        required
                        onChange={handleChange}
                        maxLength="50"
                    />
                </div>
                <div className="inputSubject">
                {language==="fr" && (
                <label htmlFor="subject-contact-form" className="lead">Sujet Du Message:</label>
                )}
                {language==="en" && (
                <label htmlFor="subject-contact-form" className="lead">Subject:</label>
                )}
                    <input
                        className="inputAnim w-100 active text-white"
                        type="text"
                        name="subject"
                        value={subject}
                        id="subject-contact-form"
                        required
                        onChange={handleChange}
                        maxLength="100"
                    />
                </div>
                <div className="inputMessage">
                {language==="fr" && (
                <label htmlFor="message-contact-form" className="lead">Votre Message:</label>
                )}
                {language==="en" && (
                <label htmlFor="message-contact-form" className="lead">Your message:</label>
                )}
                    <textarea
                        className="inputAnim w-100 active text-white"
                        type="text"
                        name="message"
                        value={message}
                        id="message-contact-form"
                        required
                        onChange={handleChange}
                        minLength="3"
                        maxLength="300"
                    />
                </div>
                <div className="form-check py-2">
                    <input
                        style={{
                            width:"20px",
                            height:"20px"
                        }}
                        onChange={e => setChecked(e.target.checked)}
                        type="checkbox"
                        id="defaultCheck1"
                        checked={checked}
                        className="form-check-input"
                    />
                    {language==="fr" && (
                <label className="ml-2 form-check-label text-light" htmlFor="defaultCheck1" >
                        En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande de contact et de la relation commerciale qui peut en découler.
                            </label>
                )}
                    {language==="en" && (
                <label className="ml-2 form-check-label text-light mt-md-1" htmlFor="defaultCheck1" >
                        I have read the terms of use of the site and I authorize this website to process my datas.
                            </label>
                )}
                </div>
                <button 
                type="submit" 
                className="mt-md-1 btn btn-outline-light" 
                disabled={email === "" || subject === "" || message === "" || !checked}>
                    Envoyer
                    </button>
            </form>
        </Fragment>
    )
}

export default ContactForm