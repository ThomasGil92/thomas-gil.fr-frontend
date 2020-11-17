import React from 'react'

const Authform = ({
    email = '',
    password = '',
    loading,
    setEmail = (f) => f,
    setPassword,
    handleSubmit,
    showPasswordInput = false,
    hideEmailInput = false
}) => (
        <form onSubmit={handleSubmit}>
            {!hideEmailInput && (
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Enter email"
                        disabled={loading}
                    />
                </div>
            )}
            {showPasswordInput && (
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        placeholder="Enter password"
                        disabled={loading}
                    />
                </div>
            )}
            <button className="btn btn-outline-primary" disabled={loading}>
                Submit
                </button>
        </form>
    )

export default Authform