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
  const handelSubmit=(e)=>{
    e.preventDefault();
    getWeather();
  };


  // console.log(import.meta.env); 
  return (
    <div className="searchBox">
      <h1 className='font-bold text-xl m-2'>Search the weather</h1>
      <form onSubmit={handelSubmit}>
       
        <TextField className='bg-zinc-200' id="city" label="City" variant="outlined" margin="normal" required  sx={{
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
      </form>
    </div>
  );
};

export default SearchBox;



