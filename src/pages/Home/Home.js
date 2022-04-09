import './home.css';
import Search from "../../components/Search/Search";
import Profile from "../../components/Profile/Profile";
import PlaylistForm from '../../components/PlaylistForm/PlaylistForm';
import Track from '../../components/Track/Track';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../Login/Login';
import { useSelector } from 'react-redux';

const Home = () => {

    const accessToken = useSelector((state) => state.accessToken.value);
    const [trackData, setTrackData] = useState([]);
    const [query, setQuery] = useState("");
    const [selectedTracks, setSelectedTracks] = useState([]);
    const [mergedTracks, setMergedTracks] = useState([]);

    //get track from search
    const getTracks = async (accessToken) => {
        const data = await axios 
        .get(`https://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`)
        .then((response)=> response)
        .catch((error) => error)
        setTrackData(data.data.tracks.items);
        console.log(data);
    }

    const handleOnChange = (e) => {
        setQuery(e.target.value);
    }

    // Selected track
    const handleSelectTrack = (uri) => {
        const alreadySelected = selectedTracks.find(selectedTrack => selectedTrack === uri);
        if (alreadySelected) {
            setSelectedTracks(selectedTracks.filter(selectedTrack => selectedTrack !== uri))
        } else {
            setSelectedTracks((selectedTrack)=>[...selectedTrack, uri])
        }
        console.log(selectedTracks);
    };

    useEffect(()=>{
        const mergedTracksWithSelectedTracks = trackData.map((track)=>({
            ...track,
            isSelected: !!selectedTracks.find((selectedTrack) => selectedTrack === track.uri)
        }));
        setMergedTracks(mergedTracksWithSelectedTracks);
    }, [selectedTracks, trackData]);

    const renderTracks = () => {
        return (
            <div className="container">
                {mergedTracks.map((card) => {
                    const {uri} = card;
                    return (
                        <Track onSelectTrack={handleSelectTrack} key={uri} item={card} />
                    )
                })}
                
            </div>
        );
    };
       
    
    //setUser
    const [user, setUser] = useState({
        displayName: '',
        user_id: undefined
    })

    const getUserProfile = async() => {
        const data = await axios
        .get(`https://api.spotify.com/v1/me?access_token=${accessToken}`)
        setUser({...user, displayName: data.data.display_name, user_id: data.data.id});
        console.log(data);
    };

    //add playlist and item

    const [addPlaylist, setAddPlaylist] = useState ({
        name: '',
        description: '',
    });

    const [playlistId, setPlaylistId] = useState(url);

    const bodyParams = {
        name: addPlaylist.name,
        description: addPlaylist.description,
        collaborative: false,
        public: false,
    }

    const header = {
        Authorization: `Bearer ${accessToken}`
    }

    const handleAddPlayListChange = (e) => {
        const {name, value} = e.target;
        setAddPlaylist({...addPlaylist, [name]: value})
    }

    const handleAddPlaylistSubmit = async (e) => {
        e.preventDefault();
        console.log(addPlaylist);
        await axios
        .post(`https://api.spotify.com/v1/users/${user.user_id}/playlists`, bodyParams,
            {
                headers: header
            }
        )
        .then((response) => (
            handleAddPlaylistItem(response.data.id)))
        .catch((error) => error)
    }

    const itemParams = {
        uris: selectedTracks
       }

    const handleAddPlaylistItem = async (id) => {
        setPlaylistId(id);
        const data = await axios 
            .post(
                `https://api.spotify.com/v1/playlists/${id}/tracks`, itemParams, {
                    headers: header
                }
            )
            .catch((error) => error);
            console.log(data);
    }

    return (
        <div className="container">
            <Profile username={user.displayName} id_user={user.user_id} getUserProfile={getUserProfile}/>
            <PlaylistForm  user_id={user.user_id} playlistId={playlistId} handleAddPlayListChange={handleAddPlayListChange} handleAddPlaylistSubmit={handleAddPlaylistSubmit} addPlaylist={addPlaylist}/>
            <Search handleOnChange={handleOnChange} getTracks={getTracks} accessToken={accessToken} data={trackData} TrackLoop={renderTracks}/>
            
        </div>
    )

}


export default Home;