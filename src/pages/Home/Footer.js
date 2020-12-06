import React from "react";
import ContactForm from "../../components/publicUser/ContactForm";
import { motion } from "framer-motion";

const Footer = ({ language }) => {
  const footerLink = (fa, link, buttonName) => {
    return (
      <motion.a
        transition={{ duration: 0.3 }}
        whileHover={{
          scale: 1.5,
          rotate: 360,
          backgroundColor: "rgb(0,0,0,0)",
          color: "#63d471",
          borderColor: "#63d471",
        }}
        target="_blank"
        title={buttonName}
        rel="noreferrer noopener"
        className="btn btn-outline-light rounded-circle m-2 p-3"
        href={link}
      >
        <i
          className={fa + " d-flex justify-content-center align-items-center"}
          style={{ width: "25px", height: "25px" }}
        ></i>
      </motion.a>
    );
  };

  return (
    <div
      id="contact"
      className="row text-center mx-0 py-3 d-flex justify-content-between align-item-center"
      style={{
        background: "#32373C",
      }}
    >
      

      <div className="col-12 col-md-8 mx-auto text-left px-md-0">
        <ContactForm language={language} />
      </div>
      <div className="col-12 mt-5 mx-auto col-md-6 my-auto">
        <div className="col align-items-center">
          {footerLink(
            "fab fa-linkedin-in ",
            "https://www.linkedin.com/in/thomas-gil-react-developer/",
            "Linkedin",
          )}
          {footerLink(
            "fas fa-user-tie ",
            "https://www.malt.fr/profile/thomasgil",
            "Malt",
          )}
          {footerLink(
            "fab fa-github ",
            "https://github.com/ThomasGil92?tab=repositories",
            "Github",
          )}
        </div>
        {window.innerWidth >960 &&(
          <div className="col">
          <a className="btn btn-outline-light m-md-4" href={"/mentions-legales"}>
            Mentions légales
          </a>
          <a className="btn btn-outline-light m-md-4" target="_blank" rel="noreferrer noopener" href={"/CVtoShare"}>
            Voir mon CV <i className="far fa-eye "></i>
          </a>
          <a className="btn btn-outline-light m-4" download href={"/img/React_Node_Thomas_Gil.pdf"}>
            Télécharger mon CV <i className="fas fa-download"></i>
          </a>
        </div>
        )}
        {window.innerWidth <=960 &&(
          <div className="col">
          <a className="btn btn-outline-light mt-4 mb-3 w-100" href={"/mentions-legales"}>
            Mentions légales
          </a>
          <a className="btn btn-outline-light w-100 mb-3" target="_blank" rel="noreferrer noopener" href={"/CVtoShare"}>
            Voir mon CV <i className="far fa-eye "></i>
          </a>
          <a className="btn btn-outline-light w-100" download href={"/img/React_Node_Thomas_Gil.pdf"}>
            Télécharger mon CV <i className="fas fa-download"></i>
          </a>
        </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
