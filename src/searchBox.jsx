import TextField from '@mui/material/TextField';
import './SearchBox.css';

const SearchBox = () => {
  return (
    <div className="searchBox">
      <h3>Search the weather</h3>
      <form>
        <TextField id="city" label="City" variant="outlined" required />
      </form>
      
    </div>
  );
};

export default SearchBox;



