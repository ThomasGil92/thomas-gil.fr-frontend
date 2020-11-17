import React, { useContext, Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from 'firebase'
import { AuthContext } from '../../context/authContext'

const Nav = () => {
    const { state, dispatch } = useContext(AuthContext)
    let history = useHistory()

    const { user } = state

    const logout = () => {
        auth().signOut()
        dispatch({
            type: 'LOGGED_IN_USER',
            payload: null
        })
        history.push('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#3F51B5" }}>
            <Link className="navbar-brand" to="/admin-dashboard">Admin Page</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {!user && (
                        <Fragment>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </Fragment>
                    )}
                    {user && (
                        <li className="nav-item">
                            <a onClick={logout} href="/login" className="nav-item nav-link">Logout</a>
                        </li>
                    )}
                </ul>
            </div>
            {user && (
                <div className="ml-auto text-light">
                    <h6 className="m-0">Connecté avec {user.email}</h6>
                </div>
            )}

        </nav>
    )
}
export default Nav