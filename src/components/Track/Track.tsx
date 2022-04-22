import styles from  './track.module.css';
import { TracksProps } from '../../spotify';


const Track= ({mergedTracks, handleSelectTrack}: TracksProps) => { 
    return <div data-testid="Track" className={styles.TrackSection}> {mergedTracks.map((track) => {
        const {album, name, artists, isSelected, uri, id, duration_ms} = track;
        return (
            <div className={styles.card} key={id} >
            <img src={album.images[0].url} alt=""/>
            <div className={styles.cardText}>
            <h3>{name}</h3>
            <h2>{artists.map(artist => artist.name).join(',')}</h2>
            <h2>{Math.floor(duration_ms/60000)} Minutes</h2>
            <button onClick={()=>{handleSelectTrack(uri)}}> {isSelected? 'Deselect' : 'Selected'}</button>
            </div>
            </div>
    
    )
    })} </div>
 
}

export default Track;


