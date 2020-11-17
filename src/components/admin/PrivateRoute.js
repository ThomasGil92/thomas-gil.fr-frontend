import React, { useState, useEffect, useContext,Fragment } from 'react'
import { Route} from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import LoadingToRedirect from './LoadingToRedirect'
import Nav from './Nav'

const PrivateRoute = ({ ...rest }) => {
    const { state } = useContext(AuthContext)
    const [user, setUser] = useState(false)


    useEffect(() => {
        if (state.user) {
            setUser(true)
        }
    }, [state.user])



    const renderContent = () => (
        <Fragment>
            <Nav />
            <div className="container-fluid ">

                <div className="row">
                    <Route {...rest} />
                </div>
            </div>
        </Fragment>
    )
    return user ? renderContent() : <LoadingToRedirect path="/login" />
}
export default PrivateRoute
