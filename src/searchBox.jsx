import TextField from '@mui/material/TextField';
import './SearchBox.css';
import { useState } from 'react';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const searchBox=()=>{
  const[city,setCity]=useState('');


 const handleChange = (e) => {
    setCity(e.target.value);
  };

  const getWeather=async()=>{
    try{
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
     
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
        <TextField id="city" label="City" variant="outlined" margin="normal" required />
      </form>
      yess
    </div>
  );
};

export default SearchBox;



