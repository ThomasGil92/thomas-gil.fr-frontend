import React, { useState, useContext, Fragment } from 'react'
import { AuthContext } from '../../context/authContext'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth, googleAuthProvider } from '../../firebase'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import AuthForm from '../../components/forms/AuthForm'
import Nav from '../../components/admin/Nav'

const USER_CREATE = gql`
mutation userCreate{
    userCreate{
        name
        email
    }
}
`

const Login = () => {
    const { dispatch } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    let history = useHistory()
    const [userCreate] = useMutation(USER_CREATE)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await auth.signInWithEmailAndPassword(email, password)
                .then(async result => {
                    const { user } = result
                    const idTokenResult = await user.getIdTokenResult()
                    dispatch({
                        type: 'LOGGED_IN_USER',
                        payload: { email: user.email, token: idTokenResult.token }
                    })

                    //send user info to our server MongoDB to either update or create user
                    userCreate()
                    history.push('/admin-dashboard')
                })
        } catch (error) {
            console.log('Login error', error)
            toast.error(error.message)
            setLoading(false)
        }
    }

    const googleLogin = () => {
        auth.signInWithPopup(googleAuthProvider)
            .then(async result => {
                const { user } = result
                const idTokenResult = await user.getIdTokenResult()
                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: { email: user.email, token: idTokenResult.token }
                })

                //send user info to our server MongoDB to either update or create user
                userCreate()
                history.push('/admin-dashboard')
            })
    }

    return (
        <Fragment>
            <Nav />
            <div className="container p-5">
                {loading ? (<h4 className="text-danger">Loading...</h4>) : (<h4>Login</h4>)}
                <button
                    onClick={googleLogin}
                    className="btn text-white mt-5" style={{ backgroundColor: "#EB4132" }}>
                    Login with Google
                    </button>
                <AuthForm
                    email={email}
                    password={password}
                    setPassword={setPassword}
                    loading={loading}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                    showPasswordInput={true}
                />
                <Link className="text-danger float-right" to="/password/forgot">Forgot Password?</Link>
            </div>
        </Fragment>

    )
}

export default Login