import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PublicNav = ({ language, setLanguage }) => {
    //const [language, setLanguage] = useState("fr")
    const [homeNavBgColor, setHomeNavBgColor] = useState("rgb(0,0,0,0)");
    const location = window.location.href;

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setHomeNavBgColor("rgb(0,0,0,0.9)");
            const nav = document.getElementById("scaleNav")
            /* nav.style.animation = "2s ease-in"
            nav.style.marginTop = "100px" */
        }
        if (window.scrollY === 0) {
            setHomeNavBgColor("rgb(0,0,0,0)");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        if (window.innerWidth < 576) {
            setHomeNavBgColor("rgb(0,0,0,0.9)");
        }
        if (window.location.href.includes("mentions")) {
            setHomeNavBgColor("rgb(0,0,0,0.9)");
        }
    },[]);

    if (language === "fr") {
        document.title = "Développeur React/Node";
    }
    if (language === "en") {
        document.title = "React/Node Developer";
    }

    const selectedLang = (e) => {
        e.preventDefault();
        setLanguage(e.target.name);
        sessionStorage.setItem("language", e.target.name);
    };

    return (
        
            <motion.nav
                id="top"
                className="navbar fixed-top navbar-expand-lg navbar-dark m-md-0 text-monospace py-0"
                 initial={{ top: -150 }}
            animate={{ top: 0 }}
            transition={{
                duration: 1.2,
                delay: 0.5,
                type: "spring",
                stiffness: "300",
            }}
            style={{
                backgroundColor: homeNavBgColor,
                zIndex: "10",
                transition: " background-color 0.5s ease",
            }}
            >
                <Link className="navbar-brand px-0" to={"/"}>
                    <motion.h1
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 1.1 }}
                        className="m-0"
                    >
                        Thomas Gil
          </motion.h1>
                    {/* <span className=" text-monospace">Développeur Web React et Node</span> */}
                </Link>
                <button
                    className="navbar-toggler ml-auto"
                    type="button"
                    data-toggle="collapse"
                    data-target="#fixed-navbar"
                    aria-controls="fixed-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="fixed-navbar">
                    <ul className="navbar-nav ml-auto text-white" id="theSpy">
                        <li className="nav-item mx-auto mr-lg-2 my-2  px-0 px-lg-2 my-lg-1">
                            <motion.a
                                whileHover={{ scale: 1.1, color: "#1B9DB7" }}
                                whileTap={{ scale: 0.9 }}
                                className="btn nav-link text-white px-0 p-lg-2" /* style={isActive(history, "/")} */
                                href="#presentation"
                            >
                                Présentation
              </motion.a>
                        </li>
                        <li className="nav-item mx-auto mr-lg-2 my-2  px-0 px-lg-2 my-lg-1">
                            <motion.a
                                whileHover={{ scale: 1.1, color: "#1B9DB7" }}
                                whileTap={{ scale: 0.9 }}
                                className="btn nav-link text-white px-0 p-lg-2" /* style={isActive(history, "/")} */
                                href="#projets"
                            >
                                Projets
              </motion.a>
                        </li>
                        <li className="nav-item mx-auto mr-lg-2 my-2  px-0 px-lg-2 my-lg-1">
                            <motion.a
                                whileHover={{ scale: 1.1, color: "#1B9DB7" }}
                                whileTap={{ scale: 0.9 }}
                                className="btn nav-link text-white px-0 p-lg-2" /* style={isActive(history, "/")} */
                                href="#contact"
                            >
                                Contact
              </motion.a>
                        </li>
                    </ul>
                </div>
            </motion.nav>
    );
};

export default PublicNav;
