import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Search = ({handleOnChange, handleSearchOnSubmit }) => {
    
    return (
        <div>
            <form onSubmit={handleSearchOnSubmit} data-testid="Search"> 
            <h1>Search Song</h1>
            <TextField  label="Search your favorite song!" variant="outlined"  id="outlined-size-small" color="success" size="small" onChange={handleOnChange} />
            <Button  variant="contained" color="success" size="large" type="submit" > Search</Button>
            </form>
            
        </div>
    )
};

export default Search;