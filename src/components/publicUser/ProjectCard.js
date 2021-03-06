import React, { useState, Fragment } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ site, i }) => {
    const [moreInfo, setMoreInfo] = useState(false);
    const [toggleMissions, setToggleMissions] = useState({
        toggled: true,
        id: "",
    });
    const [toggleTechnos, setToggleTechnos] = useState({
        toggled: true,
        id: "",
    });

    const stringsRenderer = (strings) => {
        return strings
            .toString()
            .split(",")
            .map((string, i) => {
                return (
                    <li key={i} className=" list-item m-0">
                        {string.trim().charAt(0).toUpperCase() + string.trim().slice(1)}
                    </li>
                );
            });
    };

    const handleToggleMissions = (i) => (e) => {
        e.preventDefault();
        if (toggleMissions.toggled) {
            setToggleMissions({
                toggleMissionsd: false,
                id: i,
            });
        } else {
            setToggleMissions({
                toggled: true,
                id: "x",
            });
        }
    };
    const handleToggleTechnos = (i) => (e) => {
        e.preventDefault();
        if (toggleTechnos.toggled) {
            setToggleTechnos({
                toggled: false,
                id: i,
            });
        } else {
            setToggleTechnos({
                toggled: true,
                id: "x",
            });
        }
    };

    return (
        <Fragment>
            <motion.div
                initial={{
                    boxShadow: "25px 14px 29px 0px rgba(0, 0, 0, 0.35)",
                    transform:
                        window.innerWidth > 960 &&
                        "perspective(1500px) rotateY(-10deg) rotateX(-10deg) rotateZ(0deg)",
                }}
                whileHover={{
                    boxShadow: "-25px 14px 29px 0px rgba(0, 0, 0, 0.35)",
                    transform:
                        window.innerWidth > 960 &&
                        "perspective(1500px) rotateY(10deg) rotateX(10deg) rotateZ(0deg)",
                    backgroundColor: "rgb(255, 255, 255, 0.1)",
                }}
                onMouseEnter={() => setMoreInfo(true)}
                onMouseLeave={() => setMoreInfo(false)}
                transition={{ duration: 0.2 }}
                id="projectCard"
                className="card  my-5 border-0 text-white w-100 mx-auto text-center"
                style={{ maxWidth: "300px", overflowY: "hidden" }}
            >
                <div>
                    <img
                        style={{
                            height: "300px",
                        }}
                        className="card-img-top"
                        src={site.image.url}
                        alt={site.title}
                    />
                    {moreInfo && window.innerWidth > 960 && (
                        <Fragment>
                            <motion.div
                                initial={{ top: -100, opacity: 0 }}
                                animate={{ top: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    width: "300px",
                                    height: "300px",
                                    position: "absolute",
                                    backgroundColor: "rgb(0,0,0,0.7)",
                                }}
                                className="d-flex align-items-center justify-content-center"
                            >
                                <motion.button
                                    className="btn btn-white"
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#myModal"
                                    /* onClick={(e) => handleProjectPopUp()} */
                                    whileHover={{ rotate: 90 }}
                                >
                                    <i className="fas fa-plus fa-3x" style={{ color: "#edeec0" }}>
                                        {" "}
                                    </i>
                                </motion.button>
                                <button
                                    className=" btn font-weight-bold px-0 mx-0"
                                    style={{ color: "#edeec0" }}
                                    data-toggle="modal"
                                    data-target="#myModal"
                                >
                                    {" "}
                  D'infos
                </button>
                            </motion.div>
                            <div
                                className="modal right fade w-100"
                                id="myModal"
                                role="dialog"
                                tabIndex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header bg-transparent border-0">
                                            <motion.button
                                                style={{ backgroundColor: "#32373c", color: "white" }}
                                                className="btn btn-white"
                                                type="button"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <motion.i className="fas fa-times"></motion.i>
                                            </motion.button>
                                        </div>
                                        <div className="modal-body border-0">
                                            <div className="row text-white">
                                                <div className="text-left col-6 mb-3">
                                                    <img
                                                        style={{ maxWidth: "300px", height: "300px" }}
                                                        src={site.image.url}
                                                    />
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h1>{site.title}</h1>
                                                    <p>{site.description}</p>
                                                </div>
                                            </div>
                                            <div className="row text-white">
                                                <div className="col-6">
                                                    <h3>Missions:</h3>
                                                    <div style={{ height: "165px", overflowY: "auto" }}>
                                                        <ul>
                                                            {site.missions.length > 0 &&
                                                                stringsRenderer(site.missions)}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <h3>Technos utilisées:</h3>
                                                    <div style={{ height: "165px", overflowY: "auto" }}>
                                                        <ul>
                                                            {site.technos.length > 0 &&
                                                                stringsRenderer(site.technos)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer p-0 m-0">
                                            <div
                                                className="d-flex p-0 position-absolute w-100 m-0"
                                                style={{ bottom: "0" }}
                                            >
                                                <div className="col-6 p-0">
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-outline-info w-100 h-100 py-4 d-inline-block d-flex align-items-center justify-content-center"
                                                        style={{
                                                            borderRadius: "0",
                                                            borderBottomLeftRadius: ".25rem",
                                                            backgroundColor: "rgb(48,51,44,1)",
                                                        }}
                                                        title="Lien du site"
                                                        href={site.url}
                                                    >
                                                        <span>Visiter le site</span>
                                                    </a>
                                                </div>
                                                <div className="col-6 p-0">
                                                    <a
                                                        title="Github Repository"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-outline-warning2 w-100 h-100 py-4 d-inline-block d-flex align-items-center justify-content-center"
                                                        style={{
                                                            borderRadius: "0",
                                                            borderBottomRightRadius: ".25rem",
                                                        }}
                                                        href={site.github}
                                                    >
                                                        <span>Voir le code sur Github</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )}
                </div>
                <div
                    style={{
                        maxHeight: window.innerWidth < 960 ? "" : "300px",
                        width: "300px",
                    }}
                    className="d-flex align-items-center"
                >
                    {window.innerWidth < 960 && (
                        <Fragment>
                            <div className="card-body mx-auto">
                                <div className="card-title my-3">
                                    <h3>{site.title}</h3>
                                </div>
                                <div className="row mt-3 text-left mb-5">
                                    <div className="col-12">
                                        <button
                                            type="button"
                                            className="btn btn-block text-white text-left"
                                            onClick={handleToggleMissions(i)}
                                        >
                                            <h5 className="mb-0">
                                                Missions{" "}
                                                {site.missions.length !== 0 && (
                                                    <motion.div
                                                        className="d-inline-block"
                                                        animate={{
                                                            rotate: !toggleMissions.toggled ? 180 : 0,
                                                        }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <i className="far fa-caret-square-down"></i>
                                                    </motion.div>
                                                )}

                                            </h5>
                                        </button>
                                        {!toggleMissions.toggled && toggleMissions.id === i && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.2 }}
                                                id={`${i}`}
                                                style={{ height: "auto" }}
                                            >
                                                <ul>
                                                    {site.missions.length > 0 &&
                                                        stringsRenderer(site.missions)}
                                                </ul>
                                            </motion.div>
                                        )}
                                        {toggleMissions.toggled && toggleMissions.id === "x" && (
                                            <motion.div
                                                initial={{ scale: 1 }}
                                                animate={{ scale: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                id={`${i}`}
                                                style={{ height: "auto" }}
                                            >
                                                <ul>
                                                    {site.missions.length > 0 &&
                                                        stringsRenderer(site.missions)}
                                                </ul>
                                            </motion.div>
                                        )}
                                        {(toggleMissions.toggled && toggleMissions.id !== "x") ||
                                            (toggleMissions !== "" && <div></div>)}

                                        {/*  Todo // map on misions send by db? */}
                                    </div>
                                    <div className="col-12 text-left">
                                        <button
                                            type="button"
                                            className="btn btn-block text-white text-left"
                                            onClick={handleToggleTechnos(i)}
                                        >
                                            <h5 className="mb-0">
                                                Technos utilisées{" "}
                                                {site.missions.length !== 0 && (
                                                    <motion.div
                                                        className="d-inline-block"
                                                        animate={{
                                                            rotate: !toggleTechnos.toggled ? 180 : 0,
                                                        }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <i className="far fa-caret-square-down"></i>
                                                    </motion.div>
                                                )}

                                            </h5>
                                        </button>
                                        {!toggleTechnos.toggled && toggleTechnos.id === i && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.2 }}
                                                id={`${i}`}
                                                style={{ height: "auto" }}
                                            >
                                                <ul>
                                                    {site.technos.length > 0 &&
                                                        stringsRenderer(site.technos)}
                                                </ul>
                                            </motion.div>
                                        )}
                                        {toggleTechnos.toggled && toggleTechnos.id === "x" && (
                                            <motion.div
                                                initial={{ scale: 1 }}
                                                animate={{ scale: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                id={`${i}`}
                                                style={{ height: "auto" }}
                                            >
                                                <ul>
                                                    {site.technos.length > 0 &&
                                                        stringsRenderer(site.technos)}
                                                </ul>
                                            </motion.div>
                                        )}
                                        {(toggleTechnos.toggled && toggleTechnos.id !== "x") ||
                                            (toggleTechnos !== "" && <div></div>)}
                                    </div>
                                </div>
                                <div
                                    className="d-flex p-0 position-absolute w-100 m-0"
                                    style={{ left: "0", bottom: "0" }}
                                >
                                    <div className="col-6 p-0">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-info w-100 h-100 d-inline-block d-flex align-items-center justify-content-center"
                                            style={{
                                                borderRadius: "0",
                                                borderBottomLeftRadius: ".25rem",
                                                backgroundColor: "rgb(48,51,44,1)",
                                            }}
                                            href={site.url}
                                        >
                                            <span>Visiter le site</span>
                                        </a>
                                    </div>
                                    <div className="col-6 p-0">
                                        <a
                                            title="Github Repository"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-warning text-warning w-100"
                                            style={{
                                                borderRadius: "0",
                                                borderBottomRightRadius: ".25rem",
                                            }}
                                            href={site.github}
                                        >
                                            Voir le code sur Github
                    </a>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )}
                </div>
            </motion.div>
        </Fragment>
    );
};

export default ProjectCard;
