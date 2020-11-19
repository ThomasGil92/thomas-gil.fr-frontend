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
                    </div>
                )}
            </header>
        </Fragment >
    )
}

export default HomeHeader