import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

const HomePresentation = ({ language }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        /* Optional options */
        threshold: 0,
        rootMargin: window.innerWidth > 960 ? "0px 2500px 0px 2500px" : "700px 2500px 700px 2500px"
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);




    return (
        <section id="presentation" className="py-5 idClass" style={{ marginTop: "100vh" }}>
            {language === "fr" && (
                <div className="col-11 col-md-10 mx-auto my-5" style={{ backgroundColor: "rgb(0,0,0,0)" }}>
                    <div className="row text-center">
                        <motion.div
                            ref={ref}
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: "-50vw" }
                            }}
                            initial="hidden"
                            transition={{ duration: 1.2, type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-white shadow rounded col-12 col-md-5 col-lg-4 px-4 mx-auto py-3 mb-5 mb-md-0 border-md-right"
                        >
                            <img width="100px" src="./img/48.png" alt="logo front-end" />
                            <h4 className="font-weight-bolder">Développeur Front-End</h4>
                            <p className="pt-4 px-md-3 px-0">
                                Je développe des composants web simple et dynamique pour rendre vos sites web attractifs tout en respectant les valeurs de votre projet.
                            </p>
                            <h4 className="color-custom mt-5">Langages maitrisés:</h4>
                            <p className="lead">Html 5, Css 3, Javascript</p>
                            <h4 className="color-custom mt-5">Outils design:</h4>
                            <p className="lead">Photoshop, Bootstrap</p>
                            <h4 className="color-custom mt-5"> Responsive Design:</h4>
                            <ul className="list-group justify-content-center">
                                <li className="list-group-item  border-0 py-1 lead">Mobile</li>
                                <li className="list-group-item  border-0 py-1 lead">Tablette</li>
                                <li className="list-group-item  border-0 py-1 lead">Desktop</li>
                            </ul>
                        </motion.div>



                        <motion.div
                            ref={ref}
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: window.innerWidth > 960 ? (window.innerWidth / 2) : "-50vw" }
                            }}
                            initial="hidden"
                            transition={{ duration: 1.2, type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-white shadow rounded col-12 col-md-5 col-lg-4 px-4 px-md-2 mx-auto py-3"
                        >
                            <img width="100px" src="./img/47.png" alt="logo backend" />
                            <h4 className="font-weight-bolder">Développeur Back-End</h4>
                            <p className="pt-4 px-md-3 px-0 ">
                                Grace au backend, je peux développer des applications bien plus riches en créant une API. Ce qui me permet de stocker et recevoir des données en temps réel.
                            </p>
                            <h4 className="mt-5">Langages utilisés:</h4>
                            <p className="lead">Node.js, Express.js</p>
                            <h4 className="mt-5">Outils de développement:</h4>
                            <p className="lead">MongoDb, Postman, Github, Heroku</p>
                            <h4 className="mt-5">Services:</h4>
                            <ul className="list-group justify-content-center">
                                <li className="list-group-item border-0 py-1 lead">API</li>
                                <li className="list-group-item border-0 py-1 lead">Gestion de bases de données</li>
                                <li className="list-group-item border-0 py-1 lead">Interfaces administrateurs</li>
                                <li className="list-group-item border-0 py-1 lead">Pages web dynamiques</li>
                                <li className="list-group-item border-0 py-1 lead">Intégration de webservices</li>
                                <li className="list-group-item border-0 py-1 lead">SPA</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            )}
            {language === "en" && (
                <div className="col-11 col-md-10 mx-auto my-5" style={{ backgroundColor: "rgb(0,0,0,0)" }}>
                    <div className="row text-center">

                        <motion.div
                            ref={ref}
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: "-50vw" }
                            }}
                            initial="hidden"
                            transition={{ duration: 1.2, type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-white shadow rounded col-12 col-md-5 col-lg-4 px-4 mx-auto py-3 mb-5 mb-md-0 border-md-right"
                        >
                            <img width="100px" src="./img/48.png" alt="logo front-end" />
                            <h4 className="font-weight-bolder">Frontend Developer Front-End</h4>
                            <p className="pt-4 px-md-3 px-0">
                                I develop simple and dynamic web components to make your websites attractive while respecting the values ​​of your project.                        </p>
                            <h4 className="color-custom mt-5">Mastered technologies:</h4>
                            <p className="lead">Html 5, Css 3, Javascript (React)</p>
                            <h4 className="color-custom mt-5">Design tools:</h4>
                            <p className="lead">Photoshop, Bootstrap</p>
                            <h4 className="color-custom mt-5">Design:</h4>
                            <ul className="list-group justify-content-center">
                                <li className="list-group-item  border-0 py-1 lead">UX</li>
                                <li className="list-group-item  border-0 py-1 lead">Mobile</li>
                                <li className="list-group-item  border-0 py-1 lead">Tablet</li>
                                <li className="list-group-item  border-0 py-1 lead">Desktop</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            ref={ref}
                            animate={controls}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: window.innerWidth > 960 ? (window.innerWidth / 2) : "-50vw" }
                            }}
                            initial="hidden"
                            transition={{ duration: 1.2, type: "spring", stiffness: 300, damping: 20 }}
                            className="bg-white shadow rounded col-12 col-md-5 col-lg-4 px-4 px-md-2 mx-auto py-3"
                        >
                            <img width="100px" src="./img/47.png" alt="logo backend" />
                            <h4 className="font-weight-bolder">Backend Developer</h4>
                            <p className="pt-4 px-md-3 px-0 ">
                                Thanks to the backend, I can develop much richer applications by creating an API, which allows me to store and receive data in real time.
                        </p>
                            <h4 className="mt-5">Mastered technologies:</h4>
                            <p className="lead">Node.js, Express.js</p>
                            <h4 className="mt-5">Develoment tools:</h4>
                            <p className="lead">MongoDb, Postman, Github, Heroku</p>
                            <h4 className="mt-5">Hard skills:</h4>
                            <ul className="list-group justify-content-center">
                                <li className="list-group-item border-0 py-1 lead">API</li>
                                {/* <li className="list-group-item border-0 py-1 lead">TDD, BDD, Tests end-to-end</li> */}
                                <li className="list-group-item border-0 py-1 lead">Database management</li>
                                <li className="list-group-item border-0 py-1 lead">Administrator interfaces</li>
                                <li className="list-group-item border-0 py-1 lead">Dynamic web pages</li>
                                <li className="list-group-item border-0 py-1 lead">Integration of webservices</li>
                                <li className="list-group-item border-0 py-1 lead">SPA</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default HomePresentation