import { useEffect } from "react";
import queryString from 'query-string';
import {useSelector, useDispatch} from "react-redux";
import dataAccessToken from '../../redux/accessTokenAction';

const Login = () =>{
    var client_id = '505526c8a9ad4b49aac34d2f8ee344ae';
    var redirect_uri = 'http://localhost:3000/';
    var scope = 'playlist-modify-private playlist-modify-public';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    const Auth = () => {
        const accessToken = useSelector(state => state.dataAccessToken.value);
        const dispatch = useDispatch();
    
        useEffect(()=>{
            const parsed = queryString.parse(window.location.hash);
            dispatch(dataAccessToken(parsed.access_token));
        }, [accessToken, dispatch]);
    
        console.log(accessToken);
    }
   Auth();

    return (
        <div>
            <a href={url}><button>Log  in</button></a>
        </div>
    )
   
}

export default Login;
export var url;