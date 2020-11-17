import React, { useContext, useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const PublicRoute = ({ ...rest }) => {
    const { state } = useContext(AuthContext)
    const history = useHistory()

    useEffect(() => {
        if (state.user) {
            history.push('admin-dashboard')

        }
    }, [state.user,history])

    return (
        <Route {...rest} />
    )
}

export default PublicRoute