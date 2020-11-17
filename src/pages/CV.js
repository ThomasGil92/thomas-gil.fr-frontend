import React, { useState, useEffect } from 'react'
import PublicNav from '../components/publicUser/PublicNav'
import CVfr from './CV/CVfr'
import CVText from './CV/CVText'
import Footer from './Home/Footer'

const CV = () => {
    const [language, setLanguage] = useState("fr")
    useEffect(() => {
        if (!sessionStorage.getItem('language')) {
            sessionStorage.setItem('language', language)
        }
        if (sessionStorage.getItem('language')) {
            setLanguage(sessionStorage.getItem('language'))
        }

    }, [language])


    return (
        <div className="container-fluid p-0 justify-content-center">

            <div id="CVfr" className="pt-5 pb-0 pb-md-3 ">
                <PublicNav
                    language={language}
                    setLanguage={setLanguage}
                />
                <div
                    className="col-md-10 card border-0 mx-auto mt-md-5 pt-5 mt-md-0 mb-md-5 text-dark"
                    style={{
                        backgroundColor: "rgb(255,255,255,0.9)"
                    }}
                >
                    <CVfr />
                </div>
            </div>
            <CVText  language={language}/>
            <Footer language={language}/>
        </div>
    )
}

export default CV