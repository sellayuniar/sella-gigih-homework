import styles from './home.module.css';
import Search from "../../components/Search/Search";
import Profile from "../../components/Profile/Profile";
import PlaylistForm from '../../components/PlaylistForm/PlaylistForm';
import Track from '../../components/Track/Track';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setMergedTracks } from '../../redux/tracksSlice';
import { fetchTracksData } from '../../libs/fetchTracksData';
import { addPlaylist } from '../../libs/addPlaylist';
import { addItemToPlaylist } from '../../libs/addItemToPlaylist';
import { Tracks as TracksData} from '../../spotify'
import { RootState } from '../../store';



const Home = () => {

    const accessToken = useAppSelector((state: RootState) => state.accessToken.value);
    const userID = useAppSelector((state: RootState) => state.user.userID);
    const [tracksData, setTracksData] = useState<TracksData[]>([]);
    const [query, setQuery] = useState("");
    const [selectedTracks, setSelectedTracks] = useState<string[]>([]);
    const mergedTracks = useAppSelector((state: RootState) => state.tracks.mergedTracks);
    const [playlistData, setPlaylistData] = useState ({
        title: '',
        description: '',
    });
    
    const itemParams = {
        uris: selectedTracks
    }

    const dispatch = useAppDispatch();

    useEffect(()=>{
        const mergedTracksWithSelectedTracks = tracksData.map((track)=>({
            ...track,
            isSelected: !!selectedTracks.find((selectedTrack) => selectedTrack === track.uri)
        }));
        dispatch(setMergedTracks(mergedTracksWithSelectedTracks));
    }, [selectedTracks, tracksData, dispatch]);

    const handleSelectTrack = (uri: string) => {
        const alreadySelected = selectedTracks.find(selectedTrack => selectedTrack === uri);
        if (alreadySelected) {
            setSelectedTracks(selectedTracks.filter(selectedTrack => selectedTrack !== uri))
        } else {
            setSelectedTracks((selectedTrack)=>[...selectedTrack, uri])
        }
        console.log(selectedTracks);
    };

    //get tracks

    const getTracks = () => {
        fetchTracksData(query, accessToken)
            .then(res => {
                setTracksData(res);
            });
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }
  
    const handleSearchOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        getTracks();
    }

    //add playlist and item

    const handleAddPlayListChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPlaylistData({ ...playlistData, [name]: value });
    }

    const handleAddPlaylistSubmit = (e: FormEvent) => {
        e.preventDefault();
        addPlaylist(accessToken, userID, playlistData)
            .then(res => {
                console.log("Playlist created: ", res);
                selectedTracks.length > 0 && (handleAddPlaylistItem(res.id));
            })
    }
    
    const handleAddPlaylistItem = (playlist_id: string) => {
       addItemToPlaylist(accessToken, playlist_id, itemParams)
            .then(res => {
                console.log("Added items to playlist: ", res);
            });
    }
    

    return (
        <div className={styles.container}>
            <Profile/>
            <PlaylistForm
                handleAddPlayListChange={handleAddPlayListChange}
                handleAddPlaylistSubmit={handleAddPlaylistSubmit}
                addPlaylist={addPlaylist}/>
            <Search
                handleOnChange={handleOnChange}
                handleSearchOnSubmit={handleSearchOnSubmit}
                />
            <div className={styles.TrackSection}> 
            <Track mergedTracks={mergedTracks} handleSelectTrack={handleSelectTrack} />
            </div>

        </div>
    )

}


export default Home;