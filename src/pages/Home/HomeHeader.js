import React, { Fragment } from "react";
import { motion } from "framer-motion";
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
            >
              Développeur Web Fullstack
            </motion.h1>
            <motion.p
              initial={{ y: "100vw", opacity: 0, overflow: "hidden" }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="lead text-center d-flex justify-content-center"
            >
              React
              <motion.span
                initial={{ display: "block", opacity: 0, y: 200 }}
                transition={{ delay: 2, duration: 1 }}
                animate={{ y: 0, opacity: 1 }}
                style={{ color: "#63d471" }}
                className="mx-4"
              >
                /
              </motion.span>
              Node
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
            >
              Fullstack Web Developer
            </motion.h1>
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
      </header>
    </Fragment>
  );
};

export default HomeHeader;
