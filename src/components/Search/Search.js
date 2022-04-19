import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Search = ({handleOnChange, getTracks }) => {
    
    return (
        <div>
            <form onSubmit={getTracks}> 
            <h1>Search Song</h1>
            <TextField id="outlined-basic" label="Search your favorite song!" variant="outlined" onChange={handleOnChange} />
            <Button  variant="contained" color="success" size="large" type="submit" > Search</Button>
            </form>
            
        </div>
    )
};

export default Search;