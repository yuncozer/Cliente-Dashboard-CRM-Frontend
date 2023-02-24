import  React from "react";
import { useAuth } from "../../context/authContext";
import { Navigate, Route} from "react-router-dom";
   

export function ProtectedRoute({children}){
    
    const {user} = useAuth();
    if (!user) return <Navigate to='/' />
        return <>{children}</>;

    }