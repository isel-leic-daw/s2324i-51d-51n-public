import * as React from 'react'
import {
    useState,
    createContext,
    useContext,
} from 'react'

type AuthnContextType = {
    loggedIn: boolean,
    setLoggedIn: (v: boolean) => void
}
const AuthnContext = createContext<AuthnContextType>({
    loggedIn: false,
    setLoggedIn: () => {}
})

export function AuthnStatusProvider({children}: {children: React.ReactNode}) {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <AuthnContext.Provider value={{loggedIn: loggedIn, setLoggedIn: setLoggedIn}}>
            {children}
        </AuthnContext.Provider>
    )
}

export function useLoggedIn(): boolean {
    return useContext(AuthnContext).loggedIn
}

export function useLogin() {
    return useContext(AuthnContext).setLoggedIn
}