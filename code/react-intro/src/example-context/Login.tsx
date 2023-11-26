import * as React from 'react'
import { useLoggedIn, useLogin } from './authnStatus'

export function Login() {
    const loggedIn = useLoggedIn()
    const setLoggedIn = useLogin()

    return (
        <div>
            <h3>Login</h3>
            <button onClick={() => setLoggedIn(!loggedIn)}>
                {loggedIn ? "logout" : "login"}
            </button>
        </div>
    )
}