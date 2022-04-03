import './home.css';
import Search from "../../components/Search/Search";
import Profile from "../../components/Profile/Profile";
import PlaylistForm from "../../components/PlaylistForm/PlaylistForm";

const Home = ({accessToken}) => {
    return (
        <div className="container">
            <Profile />
            <PlaylistForm />
            <Search accessToken={accessToken}/>
            
        </div>
    )

}

export default Home;