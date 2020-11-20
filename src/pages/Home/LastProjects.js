import React, { Fragment, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_SITES } from '../../graphql/queries'
import ProjectCard from '../../components/publicUser/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

SwiperCore.use([Navigation, Pagination]);

const LastProjects = ({ language }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        rootMargin: "800px 0px 800px 0px",
        threshold: 0
    });

    const { data: sites, loading } = useQuery(GET_ALL_SITES, {})

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <Fragment>
            <div id="lastProjects" style={{backgroundImage: "url(https://www.thomas-gil.fr/img/paral-big.jpg)"}}>

                {window.innerWidth > 960 && (<>
                    <div className="p-3 text-white text-center">
                        <h1>Mes derniers projets</h1>
                    </div>
                    <div className=" d-lg-block p-0 pb-3 p-lg-5">
                        <div className="row px-0 mx-0 d-flex justify-content-center">
                            {loading ? <h4 className="text-light">Loading...</h4> : (
                                sites && sites.allSites.map((site, i) => {
                                    return (
                                        <motion.div
                                            className="col-12 col-md-10 col-lg-4 px-2 px-lg-5 pb-5 text-center"
                                            key={site._id}
                                            ref={ref}
                                            animate={controls}
                                            variants={{
                                                visible: { opacity: 1, y: 0 },
                                                hidden: { opacity: 0, y: "200px" }
                                            }}
                                            initial="hidden"
                                            transition={{ duration: 1 }}
                                        >
                                            <ProjectCard site={site} />
                                        </motion.div>
                                    )
                                })

                            )}


                        </div>
                    </div>
                </>
                )}
                {window.innerWidth < 960 && (
                    <div className=" d-lg-block p-0 pb-md-3 p-lg-5">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            /*pagination={{ clickable: true }} 
                            scrollbar={{ draggable: true }} */
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {loading ? <h4 className="text-light">Loading...</h4> : (
                                sites && sites.allSites.map((site, i) => {
                                    return (
                                        <SwiperSlide key={i} className="text-center px-md-5">
                                            <ProjectCard site={site} />
                                        </SwiperSlide>

                                    )
                                }))}
                        </Swiper>

                    </div>
                )}

            </div>
        </Fragment>
    )
}

export default LastProjects