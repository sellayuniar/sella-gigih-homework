import styles from './track.module.css';
const Track = ({item, onSelectTrack}) =>{ 
    const {album, artists, name: songName, isSelected, uri} = item;
    
    return (
        
        <div className={styles.card}>
        <img src={album.images[0].url} alt=""/>
        <div className={styles.cardText}>
        <h3>{songName}</h3>
        <h2>{artists.map(artist => artist.name).join(',')}</h2>
        <button onClick={()=>{onSelectTrack(uri)}}> {isSelected? 'Deselect' : 'Selected'}</button>
        </div>
        </div>

)
}

export default Track;


