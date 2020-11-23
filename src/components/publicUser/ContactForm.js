import React, { useState, Fragment } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ContactForm = ({ language }) => {
    const [values, setValues] = useState({
        email: "",
        message: "",
        subject: "",
    });
    const [checked, setChecked] = useState(false);
    const { email, message, subject } = values;

    const handleChange = (e) => {
        if (e.target.value !== "") {
            e.target.parentNode.classList.add("active-input");
            /* if (e.target.value.includes('$')) {
                      e.target.classList.add('border-danger')
                  } */
        } else if (e.target.value === "") {
            e.target.parentNode.classList.remove("active-input");
        }

        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        await fetch(`${process.env.REACT_APP_REST_ENDPOINT}/emailToMe`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((response) => {
                setValues({
                    email: "",
                    subject: "",
                    message: "",
                });
                setChecked(false);
                var inputEmail = document.getElementsByClassName("inputEmail");
                var inputSubject = document.getElementsByClassName("inputSubject");
                var inputMessage = document.getElementsByClassName("inputMessage");
                inputEmail[0].classList.remove("active-input");
                inputSubject[0].classList.remove("active-input");
                inputMessage[0].classList.remove("active-input");
                toast.success("Votre message à bien été envoyé");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Fragment>
            <h1 className="text-white mt-5">M'envoyer un Email</h1>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="inputEmail">
                    <label htmlFor="emailContactForm" className="lead">
                        Votre Adresse Email:
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
                    <label htmlFor="subject-contact-form" className="lead">
                        Sujet Du Message:
          </label>
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
                    {language === "fr" && (
                        <label htmlFor="message-contact-form" className="lead">
                            Votre Message:
                        </label>
                    )}
                    {language === "en" && (
                        <label htmlFor="message-contact-form" className="lead">
                            Your message:
                        </label>
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
                <div className="d-flex justify-content-between py-2">
                    <div
                        style={{
                            width: "30px",
                            height: "20px",
                            cursor: "pointer",
                            backgroundColor: checked ? "#63d471" : "white",
                            overflow: "hidden"
                        }}
                        onClick={(e) => {
                            setChecked(!checked);
                            console.log(checked);
                        }}
                        id="defaultCheck1"
                        className="d-block mt-1 text-center"
                    >
                        {checked && (
                            <motion.svg
                                /* initial={{ scale: 0 }}
                                transition={{ duration: 0.2 }}
                                animate={{ scale: 1 }} */
                                className="svg-inline--fa fa-check fa-w-16"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                            >
                                <motion.path
                                    initial={{ x: 0,scale:0 }}
                                    animate={{scale:1}}
                                    fill="currentColor"
                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                ></motion.path>
                            </motion.svg>
                        )}
                    </div>
                    <div>
                        <p className="ml-2 text-light" htmlFor="defaultCheck1">
                            En soumettant ce formulaire, j'accepte que les informations
                            saisies soient exploitées dans le cadre de la demande de contact
                            et de la relation commerciale qui peut en découler.
            </p>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-md-1 btn btn-outline-light"
                    disabled={
                        email === "" || subject === "" || message === "" || !checked
                    }
                >
                    Envoyer
        </button>
            </form>
        </Fragment>
    );
};

export default ContactForm;
