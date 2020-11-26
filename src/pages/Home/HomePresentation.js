import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomePresentation = ({ language }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin:
      window.innerWidth > 960
        ? "250px 2500px 250px 2500px"
        : "700px 2500px 700px 2500px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id="presentation"
      className="py-md-5 py-2 idClass"
      style={{ backgroundColor: "#32373C" }}
    >
      <div
        className="col-11 col-md-10 text-center mx-auto my-5 text-white"
        style={{ backgroundColor: "#32373C" }}
      >
        <h1>Qui suis-je?</h1>
        <div
          className="mx-auto"
          style={{ backgroundColor: "#63d471", height: "3px", width: "100px" }}
        ></div>
        <div className="mx-auto col-12 col-md-6 py-3">
          <p className="text-center text-justify" style={{ fontWeight: "100" }}>
            Développeur web fullstack depuis 1 an, je réalise des sites web de
            la conception du projet au déploiement du site en ligne.
            <br />
            Je travaille seul ou en équipe selon le contexte de la mission.
          </p>
        </div>

        <img
          className="mt-3"
          width="100px"
          src="./img/48.png"
          alt="logo front-end"
        />
        <div className="row text-center">
          <div className="col-md-6 col-12">
            <motion.div
              ref={ref}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: "-50vw" },
              }}
              initial="hidden"
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="text-white text-center text-md-left rounded col-12 px-4 py-3 mb-md-0 border-md-right"
            >
              <h4 className="font-weight-bolder">Développement Front-End</h4>
              <p style={{ fontWeight: "200" }} className="justify">
                Conception de votre site ou application web coté navigateur. Je
                travaille avec React.js, célèbre librairie créée par Facebook et
                utilisée par bon nombre d'autres grandes applications (Airbnb,
                Uber, Instagram, ...)
                <br />
                Grâce à React, je peux créer des interfaces utilisateurs ultra
                rapides et performantes, intégrer tous les services utiles à
                votre projet, et maintenir un code structuré en toute sécurité.
              </p>
              <p style={{ fontWeight: "200" }} className="justify">
                L'experience de l'utilisateur est pour moi un objectif
                primordial, je produis votre site pour toutes les tailles
                d'écrans (Smartphones, tablettes et ordinateurs).
              </p>
            </motion.div>
          </div>
          <div className="col-md-6">
            <motion.div
              ref={ref}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: "-50vw" },
              }}
              initial="hidden"
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="text-white text-left rounded col-12 px-4 py-3 mb-md-0"
            >
              <p className="lead mb-0">HTML5 / CSS3 / Javascript / Bootstrap</p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped text-dark text-right font-weight-bold pr-2 progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "85%", backgroundColor: "#63d471" }}
                >
                  85%
                </div>
              </div>
              <p className="lead mb-0 mt-3">React.js / Redux / Next.js</p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped text-dark text-right font-weight-bold pr-2 progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "85%", backgroundColor: "#63d471" }}
                >
                  85%
                </div>
              </div>
              <p className="lead mb-0 mt-3">Photoshop</p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped text-dark text-right font-weight-bold pr-2 progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "50%", backgroundColor: "#63d471" }}
                >
                  50%
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <img
          className="mt-3"
          width="100px"
          src="./img/47.png"
          alt="logo back-end"
        />
        <div className="row text-center">
          <div className="col-md-6 d-flex align-items-center">
            <motion.div
              ref={ref}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: "-50vw" },
              }}
              initial="hidden"
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="text-white text-center text-md-left rounded col-12 px-4 py-3 mb-md-0 border-md-right"
            >
              <div>
                <h4 className="font-weight-bolder">Développement Back-End</h4>
                <p style={{ fontWeight: "200" }} className="justify">
                  Conception de votre site ou application web coté serveur.
                  <br /> Je peux facilement intégrer des données à votre site
                  web en temps réel. Pour cela j'utilise Node.js.
                  <br />
                </p>
                <p style={{ fontWeight: "200" }} className="justify">
                  Node.js me permet de créer une API pour transférer des datas
                  entre votre base de données et votre application web tout en
                  garantissant leur sécurité.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <motion.div
              ref={ref}
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: "-50vw" },
              }}
              initial="hidden"
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="text-white text-left rounded col-12 px-4 py-3 mb-md-0"
            >
              <p className="lead mb-0">Node.js</p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped text-dark text-right font-weight-bold pr-2 progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "85%", backgroundColor: "#63d471" }}
                >
                  85%
                </div>
              </div>
              <p className="lead mb-0 mt-3">API Rest / GraphQL</p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped text-dark text-right font-weight-bold pr-2 progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "85%", backgroundColor: "#63d471" }}
                >
                  85%
                </div>
              </div>
              <p className="lead mb-0 mt-3">MongoDB</p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped text-dark text-right font-weight-bold pr-2 progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%", backgroundColor: "#63d471" }}
                >
                  80%
                </div>
              </div>
              <p className="lead mb-0 mt-3">
                AWS (S3 / SES / IAM / Amplify) / Heroku / Firebase
              </p>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped text-dark text-right font-weight-bold pr-2 progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%", backgroundColor: "#63d471" }}
                >
                  70%
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePresentation;
