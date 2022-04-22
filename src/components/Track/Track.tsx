import styles from  './track.module.css';
import { TracksProps } from '../../spotify';


const Track= ({mergedTracks, handleSelectTrack}: TracksProps) => { 
    return <> {mergedTracks.map((track) => {
        const {album, name, artists, isSelected, uri, id} = track;
        return (
            <div className={styles.card} key={id} data-testid="track">
            <img src={album.images[0].url} alt=""/>
            <div className={styles.cardText}>
            <h3>{name}</h3>
            <h2>{artists.map(artist => artist.name).join(',')}</h2>
            <button onClick={()=>{handleSelectTrack(uri)}}> {isSelected? 'Deselect' : 'Selected'}</button>
            </div>
            </div>
    
    )
    })} </>
 
}

export default Track;


