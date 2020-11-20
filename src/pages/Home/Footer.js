import React from 'react'
import ContactForm from '../../components/publicUser/ContactForm'
import { motion } from 'framer-motion'

const Footer = ({ language }) => {
    const footerLink = (fa, link) => {
        return (
            <motion.a
            transition={{duration:0.3}}
                whileHover={{ scale: 1.5, rotate: 360,backgroundColor:"rgb(0,0,0,0)",color:"#9DDBAD",borderColor:"#9DDBAD" }}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-outline-light rounded-circle m-2 p-3"
                href={link}>
                <i className={fa + " d-flex justify-content-center align-items-center"}
                    style={{ width: "25px", height: "25px" }}></i>
            </motion.a>

        )
    }


    return (
        <div
            id="bottom"
            className="row text-center mx-0 py-3 d-flex justify-content-between align-item-center"
            style={{
                background: "#32373C"
            }}>
            {window.innerWidth < 960 && (
                <div className="col-12 col-md-6 text-left p-3 px-md-5 py-md-0 d-block d-md-none">
                    <ContactForm language={language} />
                </div>
            )}

            <div className="col-12 col-md-6 my-auto">
                <div className="col align-items-center">
                    {footerLink("fab fa-linkedin-in ", "https://www.linkedin.com/in/thomas-gil-react-developer/")}
                    {footerLink("fas fa-user-tie ", "https://www.malt.fr/profile/thomasgil")}
                    {footerLink("fab fa-github ", "https://github.com/ThomasGil92?tab=repositories")}
                </div>
                <div className="col">
                    <a className="btn btn-outline-light mt-2" href={"/mentions-legales"}>{language === "fr" && "Mentions légales"}{language === "en" && "Legal notice"}</a>
                </div>
            </div>

            <div className="col-12 col-md-6 text-left d-none d-md-block px-5">
                <ContactForm language={language} />
            </div>

        </div>
    )
}

export default Footer