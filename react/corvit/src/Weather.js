import React, { useEffect, useState } from "react";


function Weather(){

    const [weather , setWeather] = useState(null);

    useEffect(()=>{
        fetch('http://api.weatherapi.com/v1/current.json?q=Lahore&key=43297bb031ed4a1898b51508240909')
        .then((res)=> res.json())
        .then((data)=>{ setWeather(data) });
    });


    return(
        <>
      <div className="container mt-5">
        <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: '500px' }}>
          <h2 className="text-center mb-4">🌤️ Weather App</h2>

          <form className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city name..."
            />
            <button className="btn btn-primary" type="submit">
              Search 
            </button>
          </form>

          { weather ? 
          (<div className="text-center">
              <h3>{weather.location.name}, {weather.location.country}</h3>
              <h1>{weather.current.temp_c}°C</h1>
              <p className="text-capitalize">{weather.current.condition.text}</p>
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                alt="Weather Icon"
              />
              <div className="mt-3">
                <p>Humidity: {weather.current.humidity}%</p>
                <p>Wind: 5 m/s</p>
              </div>
            </div>) 
          : 
          (<p>Loading!!</p>)
          }

          
            


        </div>
      </div>

    </>

    );
}


export default Weather