import './track.css';
import Track from "./Track";
import { useState, useEffect} from "react";

const TrackLoop = ({tracks}) => {
    const [selectedTracks, setSelectedTracks] = useState([]);
    const [mergedTracks, setMergedTracks] = useState([]);

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
        const mergedTracksWithSelectedTracks = tracks.map((track)=>({
            ...track,
            isSelected: !!selectedTracks.find((selectedTrack) => selectedTrack === track.uri)
        }));
        setMergedTracks(mergedTracksWithSelectedTracks);
    }, [selectedTracks, tracks]);

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

    return <div>{renderTracks()}</div>
}

export default TrackLoop;


