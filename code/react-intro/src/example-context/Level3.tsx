import * as React from 'react'
import { useLoggedIn } from './authnStatus'

export function Level3() {
    const loggedIn = useLoggedIn()
    return (
        <div>
            <h3>Level 3</h3>
            {`Logged in? ${loggedIn}`}
        </div>
    )
}