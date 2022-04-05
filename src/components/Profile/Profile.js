import './profile.css';

const Profile = ({username, id_user, getUserProfile}) => {
    
   
    return (
        <div className="profile">
            {id_user === undefined && (
            <button onClick={getUserProfile}>Connect Spotify Account</button>) }
            <h1>My Profile</h1>
            <h1>{username}</h1>
            
        </div>
    )

}

export default Profile;