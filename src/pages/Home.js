import React, { useState, useEffect } from 'react'
import PublicNav from '../components/publicUser/PublicNav'
import HomeIntro from './Home/HomeIntro'
import HomePresentation from './Home/HomePresentation'
import LastProjects from './Home/LastProjects'
import Footer from './Home/Footer'

const Home = () => {
    const [language, setLanguage] = useState("fr")
    const [moreInfos, setMoreInfos] = useState(false)

    useEffect(() => {
        if (!sessionStorage.getItem('language')) {
            sessionStorage.setItem('language', language)
        }
        if (sessionStorage.getItem('language')) {
            setLanguage(sessionStorage.getItem('language'))
        }
    }, [language])

    return (
        <div className="container-fluid p-0">
            <PublicNav
                language={language}
                setLanguage={setLanguage}
            />
            <HomeIntro language={language} />
            <HomePresentation language={language} />
            <LastProjects language={language} />
            <Footer language={language} />
        </div>
    )

}

export default Home