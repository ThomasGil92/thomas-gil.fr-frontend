import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PublicNav = ({ language, setLanguage }) => {
    //const [language, setLanguage] = useState("fr")
    const [homeNavBgColor, setHomeNavBgColor] = useState("rgb(0,0,0,0)")
    const location = window.location.href

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setHomeNavBgColor("rgb(0,0,0,0.9)")
        }
        if (window.scrollY === 0) {
            setHomeNavBgColor("rgb(0,0,0,0)")
        }
    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll)
        if (window.innerWidth < 576) {
            setHomeNavBgColor("rgb(0,0,0,0.9)")
        }
        if (window.location.href.includes("mentions")) {
            setHomeNavBgColor("rgb(0,0,0,0.9)")
        }

    })

    if (language === "fr") {
        document.title = "Développeur React/Node";
    }
    if (language === "en") {
        document.title = "React/Node Developer"
    }

    const selectedLang = e => {
        e.preventDefault()
        setLanguage(e.target.name)
        sessionStorage.setItem('language', e.target.name)
    }



    return (
        <motion.div
            initial={{ top: -150 }}
            animate={{ top: 0 }}
            transition={{ duration: 1.2, delay: window.location.href.includes('CV') ? 0.5 : 0.5, type: "spring", stiffness: "300" }}
            className="w-100 fixed-top d-flex justify-content-center"
            style={{ backgroundColor: homeNavBgColor, zIndex: "10", transition: " background-color 0.5s ease" }}
        >
            <nav
                id="top"
                className="navbar navbar-expand-lg navbar-dark m-md-0 text-monospace"
                style={{
                    width: "80%"
                }}
            >
                <Link className="navbar-brand px-0" to={"/"}>
                    <motion.h1 animate={{ scale: 1.1 }} transition={{ duration: 0.2 }} whileHover={{ scale: 1.5 }} whileTap={{ scale: 1.1 }} className="m-0">Thomas Gil</motion.h1>{/* <span className=" text-monospace">Développeur Web React et Node</span> */}
                    {/* <img
                        width="50px"
                        src="./img/Groupe_1.png"
                        alt="Logo"
                        id="logo"
                    /> */}
                </Link>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-white">
                        <li className="nav-item mx-auto mr-lg-2 my-2  px-0 px-lg-2 my-lg-1" >
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="btn text-white px-0 p-lg-2"  /* style={isActive(history, "/")} */
                                href={location.includes("bottom") ? `${location}` : `${location}#bottom`}
                            >
                                Contact  <i className="far fa-hand-spock"></i>
                            </motion.a>
                        </li>
                        <li className="nav-item my-0 mb-2 my-lg-1 mr-lg-3 mx-auto" >
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="btn text-white px-0 p-md-2"  /* style={isActive(history, "/")} */ href="/CV">
                                {language === "fr" && (
                                    <span>Espace recruteurs  <i className="far fa-file-alt"></i></span>
                                )}
                                {language === "en" && (

                                    <span>Recruiters Area  <i className="far fa-file-alt"></i></span>
                                )}

                            </motion.a>
                        </li>
                        <li className="nav-item d-flex align-items-center mx-auto ml-md-2 mt-1 mt-md-1 mt-lg-0" >
                            {language === "fr" && (
                                <motion.button
                                    whileHover={{ scale: 1.5, rotate: 180 }}
                                    className="btn rounded-circle ml-md-auto"
                                    name="en"
                                    style={{
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundImage: `url("https://thomas-gil.herokuapp.com/img/uk.png")`,
                                        width: "30px",
                                        height: "30px"
                                    }}
                                    onClick={selectedLang}>
                                </motion.button>
                            )}
                            {language === "en" && (
                                (
                                    <motion.button
                                        whileHover={{ scale: 1.5, rotate: 180 }}
                                        className="btn rounded-circle ml-md-auto"
                                        name="fr"
                                        style={{
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                            backgroundImage: `url("https://thomas-gil.herokuapp.com/img/fr.png")`,
                                            width: "30px",
                                            height: "30px"
                                        }}
                                        onClick={selectedLang}>
                                    </motion.button>
                                )
                            )}

                        </li>
                    </ul>
                </div>
            </nav>
        </motion.div>
    )
}

export default PublicNav