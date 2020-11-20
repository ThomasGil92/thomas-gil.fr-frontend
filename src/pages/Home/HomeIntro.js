import React, { Fragment } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import HomeHeader from './HomeHeader'
import { motion } from 'framer-motion'

const HomeIntro = ({ language }) => {
    const videoSource = "./img/video2.mp4"

    return (
        <Fragment>

            {window.innerWidth < 577 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center text-white d-flex align-items-center justify-content-center"
                    style={{
                        position: "absolute",
                        top: "0",
                        backgroundImage: "url(/img/video-poster.jpg)",
                        backgroundRepeat: "no-repeat",
                        bottom: "0px",
                        left: "0px",
                        right: "0px",
                        margin: "auto",/* 
                        maxWidth: "400px", */
                        width: "100%"
                    }}
                >
                    <div className="col-12 col-md-8 text-center d-flex align-items-center">
                        <HomeHeader
                            language={language}
                        />
                    </div>
                </motion.div>
            ) : (
                    <motion.div
                        transition={{ delay: 0, duration: 10, loop: Infinity }}
                        initial={{ backgroundSize: "100%" }}
                        animate={{ backgroundSize: "120%" }}
                        className="text-center text-white d-flex align-items-center justify-content-center"
                        style={{
                            position: "absolute",
                            top: "0",
                            backgroundImage: "url(/img/video-poster.jpg)",
                            backgroundRepeat: "no-repeat",
                            bottom: "0px",
                            left: "0px",
                            right: "0px",
                            margin: "auto",/* 
                        maxWidth: "400px", */
                            width: "100%"
                        }}
                    >
                        <div className="col-12 col-md-8 text-center mx-auto">
                            <HomeHeader
                                language={language}
                            />
                        </div>
                    </motion.div>
                )}






            {/* For Video Background */}
            {/*  Video by <a href="https://pixabay.com/fr/users/coverr-free-footage-1281706/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=10822">Coverr-Free-Footage</a> from <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=10822">Pixabay</a>*/}
            {/* <a href='https://fr.freepik.com/vecteurs/lumiere'>Lumière vecteur créé par starline - fr.freepik.com</a> */}
            {/* <a href='https://fr.freepik.com/photos/fond'>Fond photo créé par Racool_studio - fr.freepik.com</a> */}
            {/* <a href='https://fr.freepik.com/vecteurs/fond'>Fond vecteur créé par starline - fr.freepik.com</a> */}
        </Fragment>
    )
}

export default HomeIntro