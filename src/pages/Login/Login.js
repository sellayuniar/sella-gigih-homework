import "./login.css";

const Login = () =>{
    var client_id = process.env.REACT_APP_SPOTIFY_KEY;
    var redirect_uri = 'http://localhost:3000/';
    var scope = 'playlist-modify-private playlist-modify-public';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    return (
        <div className="btn-login">
            <a href={url}><button>Log  in</button></a>
        </div>
    )
   
}

export default Login;
export var url;