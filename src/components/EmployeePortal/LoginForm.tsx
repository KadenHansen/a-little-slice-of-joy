import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginForm() {

    const navigate = useNavigate()

    useEffect (() => {
        if (localStorage.currentUser) {
            navigate("/portal")
        }
    })
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e: any) {
        e.preventDefault()
       const response = await fetch('http://localhost:8000/users/login', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(credentials)
       })

       const data = await response.json()

       if (response.status === 200) {
           localStorage.setItem('token', data.token)
           localStorage.setItem('currentUser', JSON.stringify(data.currentUser, ["email", "firstName", "lastName"]))
           navigate('/portal')
       } else {
           setErrorMessage(data.message)
       }

    }

    return (
        <main>
            <h1>Login</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="username"
                            required
                            value={credentials.username}
                            onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                            className="form-control"
                            id="username"
                            name="username"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Login" />
            </form>
        </main>
    )
}

export default LoginForm