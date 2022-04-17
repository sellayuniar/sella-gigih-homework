import styles from './track.module.css';
import React from 'react';

const Track: React.FC<{item: {}, onSelectTrack: string[]}> = ({item, onSelectTrack}) =>{ 
    const {album, artists, name: songName, isSelected, uri}: React.FC <{album: string, }>= item;
    
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


