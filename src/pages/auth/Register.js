import React, { useState, Fragment } from 'react'
import { auth } from '../../firebase'
import { toast } from 'react-toastify';
import AuthForm from '../../components/forms/AuthForm'
import Nav from '../../components/admin/Nav'

const Register = () => {

    const [email, setEmail] = useState('tgil849@gmail.com')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT)
        const config = {
            url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
            handleCodeInApp: true
        }

        const result = await auth.sendSignInLinkToEmail(email, config)
        console.log('result', result)


        // show toast notif to user about email sent
        toast.success(`Email is sent to ${email}. Click on the link to complete your registration`)
        // save user email to localStorage
        window.localStorage.setItem('emailForRegistration', email)
        setEmail('')
        setLoading(false)
    }

    return (
        <Fragment>
            <Nav />
            <div className="container p-5">
                {loading ? (<h4 className="text-danger">Loading...</h4>) : (<h4>Register</h4>)}
                <AuthForm
                    email={email}
                    loading={loading}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                />
            </div>
        </Fragment>

    )
}

export default Register