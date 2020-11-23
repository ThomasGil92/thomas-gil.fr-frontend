import React, { useContext, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_SITES } from '../graphql/queries'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import SiteCard from '../components/SiteCard'

const AdminDashboard = () => {
    const { data: sites, loading, error } = useQuery(GET_ALL_SITES, {})
    const { state } = useContext(AuthContext)
    const { user } = state

    const identity = () => {
        return (
            <div className="bg-danger px-md-5 py-md-2 text-center w-100">
                <h4>Bonjour {user.email.split('@')[0]}</h4>
            </div>
        )
    }


    const adminNav = () => {
        return (
            <div className="col-md-3 px-0">
                <ul className="nav flex-column border">
                    <li className="nav-item">
                        <Link to="/" className="nav-link btn-light text-center py-3" href="#"><h6 className="m-0">Voir le site <i className="far fa-eye"></i></h6></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/newsite" className="nav-link btn-light text-center py-3" href="#"><h6 className="m-0">Ajouter un site au portfolio <i className="far fa-plus-square"></i></h6></Link>
                    </li>
                </ul>
            </div>
        )
    }

    const publishedSites = () => {
        return (
            <div className="col-md-9 py-md-5 text-dark text-center">
                <h3>Sites en ligne</h3>
                <div className="row px-4 mt-5 justify-items-space-between">
                    {sites && !loading && sites.allSites.map((site => {
                        return (
                            <div key={site._id} className="col-md-4" >
                                <div className="card slide-anim mb-md-4">
                                    <SiteCard
                                        site={site}
                                        showUpdateButton={true}
                                    />
                                </div>
                            </div>
                        )
                    }))}
                </div>

            </div>
        )
    }

    return (
        <div className="w-100">
            {identity()}
            <div className="row p-0 m-0">
                {adminNav()}
                {loading ? (
                    <div className="col-md-9 py-md-5 text-dark text-center">
                        <h3>Loading...</h3>
                    </div>
                ) : publishedSites()}

            </div>
        </div>

    )
}

export default AdminDashboard