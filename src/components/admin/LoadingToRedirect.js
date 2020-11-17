import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const LoadingToRedirect = ({ path }) => {

    let history = useHistory()
    const [count, setCount] = useState(5)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => currentCount - 1)
        }, 1000)
        // Redirect once count is equal to 0
        count === 0 && history.push(path)
        // cleanup
        return () => clearInterval(interval)
    }, [history,count,path])

    return (
        <div className="container p-5 vw-100 vh-100 text-center justify-content-center d-flex align-items-center">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
export default LoadingToRedirect