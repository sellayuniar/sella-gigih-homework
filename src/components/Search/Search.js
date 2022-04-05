import "./search.css";


const Search = ({accessToken, handleOnChange, data,  getTracks, TrackLoop}) => {
    
    return (
        <div className="search-section">
            <h1>Search Song</h1>
            <input className="search" type="text" onChange={handleOnChange} placeholder="Type to Search"/>
            <button onClick={()=>{getTracks(accessToken)}} > Search</button>
            <div className="track-section">
            {data !== undefined && (
                <TrackLoop tracks={data}/>
            )

            }
             </div>
        </div>
    )
};

export default Search;