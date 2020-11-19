import React, { useState, Fragment } from 'react'
import { motion } from 'framer-motion'


const ProjectCard = ({ site }) => {
    const [moreInfo, setMoreInfo] = useState(false)
    const [collapsedProjectInfos, setCollapsedProjectInfos] = useState(true)


    const handleProjectPopUp = (e) => {
        setCollapsedProjectInfos(false)
    }

    /*  const CollapsedInfos = site => {
         return (
             
         )
     } */
    return (
        <Fragment>

            <motion.div
                onMouseEnter={() => setMoreInfo(true)}
                onMouseLeave={() => setMoreInfo(false)}
                id="projectCard"
                className="card mb-3 mb-md-5 border-0 text-white w-100"
                style={{ maxWidth: "300px", overflowY: "hidden" }}
            >

                <div>

                    <motion.img
                    whileHover={{backgroundSize:"100px"}}
                        style={{
                            height: "300px"
                        }}
                        className="card-img-top"
                        src={site.image.url}
                        alt={site.title}
                    />
                    {moreInfo && window.innerWidth > 960 && (
                        <Fragment>
                            <motion.div
                                initial={{ top: -100, opacity: 0 }} animate={{ top: 0, opacity: 1 }} transition={{ duration: 0.3 }}
                                style={{ width: "300px", height: "300px", position: "absolute", backgroundColor: "rgb(54,162,235,0.7)" }}
                                className="d-flex align-items-center justify-content-center"
                            >
                                <motion.button
                                    className="btn btn-white"
                                    type="button"
                                    data-toggle="modal" data-target="#myModal"
                                    /* onClick={(e) => handleProjectPopUp()} */
                                    whileHover={{ rotate: 90 }}
                                >
                                    <i className="fas fa-plus fa-3x text-white"> </i>
                                </motion.button>

                            </motion.div>
                            <div className="modal right fade w-100" id="myModal" role="dialog" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog text-dark">
                                    <div className="modal-content" style={{ backgroundColor: "rgb(265,265,265,1)" }}>
                                        <div className="modal-header bg-transparent">
                                            {/* <h5 className="modal-title text-dark" id="exampleModalLabel">{site.title}</h5> */}
                                            <motion.button whileTap={{ rotate: 90 }} className="btn btn-white" data-dismiss="modal" aria-label="Close">
                                                <motion.i whileTap={{ rotate: 90 }} className="fas fa-times"></motion.i>
                                            </motion.button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="text-left col-6 mb-3">
                                                    <img style={{ maxWidth: "300px", height: "300px" }} src={site.image.url} />
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h1>{site.title}</h1>
                                                    <p>{site.description}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <h3>Missions:</h3>
                                                    {/*  Todo // map on misions send by db? */}
                                                </div>
                                                <div className="col-6">
                                                    <h3>Technos utilisées:</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer p-0 m-0">
                                            <div className="d-flex p-0 position-absolute w-100 m-0" style={{ bottom: "0" }}>
                                                <div className="col-6 p-0">
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-outline-info w-100 h-100 py-4 d-inline-block d-flex align-items-center justify-content-center"
                                                        style={{ borderRadius: "0", borderBottomLeftRadius: ".25rem", backgroundColor: "rgb(48,51,44,1)" }}
                                                        href={site.url}
                                                    ><span>Visiter le site</span></a>
                                                </div>
                                                <div className="col-6 p-0">
                                                    <a
                                                        title="Github Repository"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-outline-warning text-warning w-100 py-4"
                                                        style={{ borderRadius: "0", borderBottomRightRadius: ".25rem" }}
                                                        href={site.github}
                                                    >Voir le code sur Github</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )}

                </div>
                <div style={{ maxHeight: "300px", width: "300px" }} className="d-flex align-items-center">
                    <div className="card-body mx-auto">
                        <div className="card-title my-3">
                            <h3>{site.title}</h3>
                        </div>
                        {window.innerWidth < 960 && (
                            <Fragment>
                                <div className="row mt-3 text-left mb-5">
                                    <div className="col-12">
                                        <h5>Missions:</h5>
                                        {/*  Todo // map on misions send by db? */}
                                    </div>
                                    <div className="col-12">
                                        <h5>Technos utilisées:</h5>
                                    </div>
                                </div>
                                <div className="d-flex p-0 position-absolute w-100 m-0" style={{ left:"0",bottom: "0" }}>
                                    <div className="col-6 p-0">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-info w-100 h-100 d-inline-block d-flex align-items-center justify-content-center"
                                            style={{ borderRadius: "0", borderBottomLeftRadius: ".25rem", backgroundColor: "rgb(48,51,44,1)" }}
                                            href={site.url}
                                        ><span>Visiter le site</span></a>
                                    </div>
                                    <div className="col-6 p-0">
                                        <a
                                            title="Github Repository"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-warning text-warning w-100"
                                            style={{ borderRadius: "0", borderBottomRightRadius: ".25rem" }}
                                            href={site.github}
                                        >Voir le code sur Github</a>
                                    </div>
                                </div>
                            </Fragment>
                        )}

                    </div>

                </div>

            </motion.div>
        </Fragment>
    )
}

export default ProjectCard