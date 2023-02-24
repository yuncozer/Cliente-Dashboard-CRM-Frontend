import  React from "react";
import { useAuth } from "../../context/authContext";
import { Navigate, Route} from "react-router-dom";
   

export function RouteActiveUser({children}){
    
    const {user} = useAuth();
    if (user) return <Navigate to='/dashboard' />
        return <>{children}</>;

    }