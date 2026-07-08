import TextField from '@mui/material/TextField';
import './SearchBox.css';
import { useState } from 'react';


const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const SearchBox=()=>{
  const[city,setCity]=useState('');


 const handleChange = (e) => {
    setCity(e.target.value);
  };

  const getWeather=async()=>{
    try{
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
     console.log(response)
    const data=await response.json();
    console.log(data);
    }catch(error){
      console.log(error);
    }

  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    getWeather();
  };


  // console.log(import.meta.env); 
  return (
    <div className="searchBox">
      <h1 className='font-bold text-xl m-2'>Search the weather</h1>
      <form onSubmit={handleSubmit}>
       
        <TextField className='bg-zinc-200' id="city" label="City" variant="outlined" margin="normal"  vlaue= {city} required  onChange={handleChange} sx={{
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(0,0,0,0.1)",
      color: "black",

      "& fieldset": {
        borderColor: "rgba(0,0,0,0.8)",
      },

      "&:hover fieldset": {
        borderColor: "#000",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#000",
        borderWidth: "2px",
      },
    },

    "& .MuiInputLabel-root": {
      color: "rgba(0,0,0,0.8)",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#000",
    },
  }}
   />
   <button 
          type="button" 
          className="m-3 text-white rounded-2xl bg-gradient-to-r from-pink-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-600 font-medium text-sm px-4 py-2.5 text-center leading-5 cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;



