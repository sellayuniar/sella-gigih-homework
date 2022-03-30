import { useState, useEffect } from "react";
import Login from "./Login";
import queryString from 'query-string';
import Search from "../Search/Search";

const Auth = () => {
    const [accessToken, setAccessToken] = useState("");
    useEffect(()=>{
        const parsed = queryString.parse(window.location.hash);
        setAccessToken(parsed.access_token);
    }, [])

    if (accessToken !== undefined) {
        return (
                <Search accessToken={accessToken} />
        )
        
    } else {
        return (
                <Login />
        )
    }  
}

export default Auth;

