import React, {useState} from "react"
import {globalEventDistributor} from "../App"
import {LoginModel} from "../model/LoginModel"

async function Login(credentials: LoginModel) {
    return fetch(`http://${process.env.SERVICE_URL}:8080/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    }).then((data: any) => data.json())
}

export function LoginApi({setToken}: any) {
    const [username, setUserName]: any = useState()
    const [password, setPassword]: any = useState()
    const [error, setError]: any = useState<any | null>(null)

    function submitResponce(response: {token: any}) {
        setToken(response.token)
    }

    const handleSubmit: any = async (e: any): Promise<void> => {
        e.preventDefault()
        setError(null)
        const response: any = await Login({username, password})
        if (response.token) {
            submitResponce(response)
            globalEventDistributor.globalStore.username = username
            alert("Login successful")
        } else {
            setError(response.error)
        }
    }

    return (
        <div className="login">
            {error && <p className="login-error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={(e: any): any => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={(e: any): any => setPassword(e.target.value)} />
                </label>
                <div style={{marginTop: 20}}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
