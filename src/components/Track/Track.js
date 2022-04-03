
const Track = ({item, onSelectTrack}) =>{ 
    const {album, artists, name: songName, isSelected, uri} = item;
    
    return (
        
        <div className="card">
        <img src={album.images[0].url} alt=""/>
        <h3>{songName}</h3>
        <h2>{artists.map(artist => artist.name).join(',')}</h2>
        <button onClick={()=>{onSelectTrack(uri)}}> {isSelected? 'Deselect' : 'Selected'}</button>
        </div>

)
}

export default Track;


