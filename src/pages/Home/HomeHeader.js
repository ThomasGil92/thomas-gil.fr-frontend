import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
const HomeHeader = ({ language }) => {

    return (
        <Fragment>
            <header className="mt-5 mt-md-0">
                {language === "fr" && (
                    <div id="homeHeader" className="text-center py-4 text-white">
                        <motion.h1

                            initial={{ y: "-100vw", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 1.2 }}
                            className="test font-weight-bold mb-4 mt-2"
                        >Développeur Web Fullstack</motion.h1>
                        <motion.p
                            initial={{ y: "100vw", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 1.2 }}
                            className="lead"
                        >
                            React / Node
                            </motion.p>
                        {window.innerWidth > 960 && (
                            <motion.a
                                initial={{ y: 500, opacity: 0 }}
                                animate={{ y: 60, opacity: 1 }}
                                transition={{ delay: 2, duration: 0.5, stiffness: 500, damping: 25, type: "spring" }}
                                className="btn btn-outline-light rounded-pill"
                                href="/#presentation"
                                style={{ height: "120px" }}
                            >

                                <motion.p animate={{ y: 55 }} transition={{ duration: 1.5, delay: 1, loop: Infinity }} >
                                    <i className="fas fa-angle-double-down"></i>
                                </motion.p>



                            </motion.a>
                        )}
                    </div>
                )}
                {language === "en" && (
                    <div id="homeHeader" className="text-center py-5 text-white">
                        <motion.h1
                            initial={{ y: "-100vw", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 1.2 }}
                            className="font-weight-bold mb-4 mt-2"
                        >Fullstack Web Developer</motion.h1>
                        <motion.p
                            initial={{ y: "100vw", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 1.2 }}
                            className="lead"
                        >React / Node</motion.p>
                        {window.innerWidth > 960 && (
                            <motion.div
                                initial={{ y: 500, opacity: 0 }}
                                animate={{ y: 60, opacity: 1 }}
                                transition={{ delay: 2, duration: 0.5, stiffness: 500, damping: 25, type: "spring" }}
                                className="btn btn-outline-light rounded-pill"
                                href="/#presentation"
                                style={{ height: "120px" }}
                            >

                                <motion.p animate={{ y: 55 }} transition={{ duration: 1.5, delay: 1, loop: Infinity }} >
                                    <i className="fas fa-angle-double-down"></i>
                                </motion.p>

                            </motion.div>
                        )}
                    </div>
                )}
            </header>
        </Fragment >
    )
}

export default HomeHeader