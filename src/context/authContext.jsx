import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase/firebase.config"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail
} from "firebase/auth";
import img_logo from '../../public/img/logo.jpg';


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
    const [pending, setPending] = useState(true)

    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                setUser(null)
                setPending(false)
            } else {
                setUser(currentUser)
                setPending(false)
            }
        })
        return () => suscribed()
    }, [])

    if (pending)
        return <div className="flex flex-col items-center justify-center mt-[40vh] gap-4 text-2xl sm:text-5xl text-white font-bold">
            Loading <img src={img_logo} className=" w-16 h-16 sm:w-24 sm:h-24 rounded-full animate-spin" />
        </div>

    const register = async (email, password) => await createUserWithEmailAndPassword(auth, email, password)

    const login = async (email, password) => await signInWithEmailAndPassword(auth, email, password)

    const logout = async () => await signOut(auth)

    const resetPassword = async (email) => await sendPasswordResetEmail(auth, email)

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider()
        return await signInWithPopup(auth, responseGoogle)
    }

    return (
        <authContext.Provider value={{
            register,
            login,
            loginWithGoogle,
            logout,
            resetPassword,
            user,
            pending
        }}>{children}
        </authContext.Provider>);
}