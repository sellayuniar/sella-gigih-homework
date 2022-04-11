import styles from "./search.module.css";


const Search = ({accessToken, handleOnChange, data,  getTracks, TrackLoop}) => {
    
    return (
        <div>
            <div  className={styles.searchSection}> 
            <h1>Search Song</h1>
            <input className="search" type="text" onChange={handleOnChange} placeholder="Type to Search"/>
            <button onClick={()=>{getTracks(accessToken)}} > Search</button>
            </div>
            
            {data !== undefined && (
                <TrackLoop tracks={data}/>
            )}
             
        </div>
    )
};

export default Search;