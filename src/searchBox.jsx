import TextField from "@mui/material/TextField";
import "./SearchBox.css";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const SearchBox = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");


  const handleChange = (e) => {
    setCity(e.target.value);
  };


  const getWeather = async () => {
    try {
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );


      const data = await response.json();


      if (data.cod !== 200) {
        setWeather(null);
        setError("City not found ❌");
        return;
      }


      setWeather(data);


    } catch (error) {
      setError("Something went wrong");
      console.log(error);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };


  return (
    <div className="min-h-[350px] flex flex-col items-center justify-center">


      {/* Search Section */}

      <div className="text-center">

        <h1 className="text-3xl font-bold text-white mb-5">
          Weather Explorer 🌍
        </h1>


        <form onSubmit={handleSubmit}>

          <TextField
            label="Search City"
            variant="outlined"
            value={city}
            onChange={handleChange}
            required

            sx={{
              width: "280px",

              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                color: "white",

                "& fieldset": {
                  borderColor: "white",
                },

                "&:hover fieldset": {
                  borderColor: "#38bdf8",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#38bdf8",
                },
              },


              "& .MuiInputLabel-root": {
                color: "white",
              }
            }}
          />


          <button
            type="submit"
            className="
            ml-3 px-6 py-3 rounded-full
            text-white font-semibold
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:scale-105
            transition-all duration-300
            shadow-lg
            "
          >
            Search
          </button>

        </form>

      </div>



      {/* Error */}

      {
        error && (
          <p className="text-red-300 mt-5 text-lg">
            {error}
          </p>
        )
      }



      {/* Weather Card */}

      {
        weather && (

          <div
            className="
            mt-10 w-[350px]
            rounded-3xl
            p-8
            text-white
            bg-white/20
            backdrop-blur-xl
            shadow-2xl
            border border-white/30
            animate-pulse
            "
          >


            <div className="text-center">


              <h2 className="text-2xl font-semibold">
                📍 {weather.name}
              </h2>


              <img
                className="mx-auto w-28"
                src={
                  `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
                }
                alt="weather"
              />


              <h1 className="text-6xl font-bold">
                {Math.round(weather.main.temp)}°
              </h1>


              <p className="text-xl capitalize mt-2">
                {weather.weather[0].description}
              </p>


            </div>



            <div className="grid grid-cols-2 gap-4 mt-8">


              <div
                className="
                bg-white/20
                rounded-2xl
                p-4
                text-center
                "
              >
                💧
                <p>
                  Humidity
                </p>
                <b>
                  {weather.main.humidity}%
                </b>
              </div>



              <div
                className="
                bg-white/20
                rounded-2xl
                p-4
                text-center
                "
              >
                🌬️
                <p>
                  Wind
                </p>
                <b>
                  {weather.wind.speed} m/s
                </b>
              </div>



              <div
                className="
                bg-white/20
                rounded-2xl
                p-4
                text-center
                col-span-2
                "
              >
                🌡️ Feels Like

                <b className="block">
                  {Math.round(weather.main.feels_like)}°
                </b>

              </div>


            </div>


          </div>

        )
      }


    </div>
  );
};


export default SearchBox;