import TextField from '@mui/material/TextField';
import './SearchBox.css';

const SearchBox = () => {
  return (
    <div className="searchBox">
      <h1 className='font-bold text-xl '>Search the weather</h1>
      <form>
        <TextField id="city" label="City" variant="outlined" required />
      </form>
      
    </div>
  );
};

export default SearchBox;



