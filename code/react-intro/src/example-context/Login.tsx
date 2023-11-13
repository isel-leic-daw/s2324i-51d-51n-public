import * as React from 'react'
import { useLoggedIn, useLogin } from './authnStatus'

export function Login() {
    const loggedin = useLoggedIn()
    const setLoggedin = useLogin()

    return (
        <div>
            <h3>Login</h3>
            <button onClick={() => setLoggedin(!loggedin)}>
                {loggedin ? "logout" : "login"}
            </button>
        </div>
    )
}