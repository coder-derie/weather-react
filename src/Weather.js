import React, {useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(){
    const [city, setCity] = useState("");
    
    
    function handleSubmit(event){
        event.preventDefault();
        let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4aebdc826d2f6fe4955b6c3fa809665d&units=metric`
        axios.get(apiUrl).then(showWeather);

    }
    function updateCity(event){
        setCity(event.target.value);
    }
    function showWeather(response){
        alert(`Welcome to ${city}! It is ${response.data.main.temp} ℃`);
    }
    let form =(
        <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Type a city" onChange={updateCity}/>
                <input type="submit" value="Search" />
            </form>
            )
    
        return(
        <div className="Weather">
            <h2>React to VS Code</h2>
            {form}
            <Loader
        type="BallTriangle"
        color="#ffe3fe"
        height={100}
        width={100}
        timeout={3000} 
      />
            </div>
    )
    
    
}