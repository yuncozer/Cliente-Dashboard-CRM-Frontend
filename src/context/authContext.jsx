import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config"
import { createContext, useContext } from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";


export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        console.warn("Error creating auth context");
    }
    return context;
};

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                console.log("No hay usuario inscrito");
                setUser("")
            } else {
                setUser(currentUser)
            }
        })
        return () => suscribed()
    }, [])

    const register = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
        // console.log(email, "  ", password);
    }

    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
        // console.log(response);
        // console.log(email, "  ", password);
    }
    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider()
        return await signInWithPopup(auth, responseGoogle)
    }

    const logout = async () => {
        const response = await signOut(auth)
        console.log(response);
    }

    return (
        <authContext.Provider value={{
            register,
            login,
            loginWithGoogle,
            logout,
            user
        }}>{children}
        </authContext.Provider>);
}