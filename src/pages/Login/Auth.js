import { useEffect } from "react";
import queryString from 'query-string';
import {useSelector, useDispatch} from "react-redux";
import { saveAccessToken } from '../../redux/accessTokenSlice';
import Login from "./Login";
import { useHistory } from "react-router-dom";

const Auth = () => {
    const accessToken = useSelector((state) => state.accessToken.value);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        const parsed = queryString.parse(window.location.hash);
        dispatch(saveAccessToken(parsed.access_token));
    }, [accessToken, dispatch]);

    console.log(accessToken);

    useEffect(() => {
        accessToken !== undefined && (
          history.push("create-playlist")
        )
      }, [accessToken, history]);


    return (
        <Login />
    )
}

export default Auth;

