import React, { Fragment,useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const CVText = ({ language }) => {

    const controls = useAnimation();
    const [ref, inView] = useInView({
        /* Optional options */
        threshold: 0,
        // rootMargin: window.innerWidth > 960 ? "0px 2500px 0px 2500px" : "250px 2500px 250px 2500px"
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div id="CVParallax" className="col-md-12 d-flex text-white align-items-center text-center justify-content-center vh-100">
            <div className="col-md-5 ">
                {language === "fr" && (
                    <Fragment>
                        <motion.h2
                            ref={ref}
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: "-50vw" }
                            }}
                            initial="hidden"
                            transition={{ duration: 1.2, type: "spring", stiffness: 300 }}
                            className="mb-5">
                            Démarrer un projet ensemble?
                            </motion.h2>
                        <motion.div
                            style={{ fontSize: "1.2em" }}
                            ref={ref}
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: "-50vw" }
                            }}
                            initial="hidden"
                            transition={{ duration: 1.2, type: "spring", stiffness: 350, delay: 0.5 }}
                        >
                            <p>Si mon profil correspond à vos besoins, n'hésitez pas à me contacter pour un entretien en physique, dans vos locaux ou en visio.</p>
                            <p>Disponible pour toutes sortes de projets web, je travaille en régie ou bien en présentiel.</p>
                        </motion.div>
                    </Fragment>
                )}
                {language === "en" && (
                    <Fragment>
                        <h2 className="mb-5">Begin a project together?</h2>
                        <div style={{ fontSize: "1.2em" }}>
                            <p>If my profile corresponds to your needs, do not hesitate to contact me for an interview in physics, in your premises or in video.</p>
                            <p>Available for all kinds of web projects, I work in remote or face-to-face</p>
                        </div>
                    </Fragment>
                )}


            </div>
        </div>
    )
}

export default CVText