import './login.css';
import { useState, useEffect } from "react";
import Login from "./Login";
import queryString from 'query-string';
import Home from "../../pages/Home/Home";

const Auth = () => {
    const [accessToken, setAccessToken] = useState("");
    useEffect(()=>{
        const parsed = queryString.parse(window.location.hash);
        setAccessToken(parsed.access_token);
    }, []);

   


    if (accessToken !== undefined) {
        return (
                <Home accessToken={accessToken}  />
        )
        
    } else {
        return (
                <Login />
        )
    }  
}

export default Auth;

