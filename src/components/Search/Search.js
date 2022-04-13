import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Search = ({accessToken, handleOnChange, data,  getTracks, TrackLoop}) => {
    
    return (
        <div>
            <div> 
            <h1>Search Song</h1>
            <TextField id="outlined-basic" label="Search your favorite song!" variant="outlined" onChange={handleOnChange} />
            <Button  variant="contained" color="success" size="large" onClick={()=>{getTracks(accessToken)}} > Search</Button>
            </div>
            
            {data !== undefined && (
                <TrackLoop tracks={data}/>
            )}
             
        </div>
    )
};

export default Search;