import './login.css';
import {  useEffect } from "react";
import Login from "./Login";
import queryString from 'query-string';
import Home from "../../pages/Home/Home";
import {useSelector, useDispatch} from "react-redux";
import {dataAccessToken} from '../../redux/accessToken-action';


const Auth = () => {
    const accessToken = useSelector(state => state.dataAccessToken.value);
    const dispatch = useDispatch();

    useEffect(()=>{
        const parsed = queryString.parse(window.location.hash);
        dispatch(dataAccessToken(parsed.access_token));
    }, [accessToken, dispatch]);

   


    if (accessToken !== undefined) {
        return (
                <Home/>
        )
        
    } else {
        return (
                <Login />
        )
    }  
}

export default Auth;

