

const Track = ({item, onSelectedTrack}) =>{ 
    const {album, artists, name: songName, isSelected, uri} = item;
    
    return (
        <div className="container">
        <div className="card">
        <img src={album.images[0].url} alt=""/>
        <h3>{songName}</h3>
        <h2>{artists.map(artist => artist.name).join(',')}</h2>
        <button onClick={()=>{onSelectedTrack(uri)}}> {isSelected? 'Deselect' : 'Selected'}</button>
        </div>
        </div>
)
}

export default Track;


