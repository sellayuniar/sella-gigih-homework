
const Login = () =>{
    var client_id = '505526c8a9ad4b49aac34d2f8ee344ae';
    var redirect_uri = 'http://localhost:3000/';
    var scope = 'user-modify-private';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    return (
        <div>
            <a href={url}><button>Log  in</button></a>
        </div>
    )
   
}

export default Login;
export var url;