import React from 'react';
import { useSelector } from 'react-redux';
import fiveday from "../components/fiveday.css"
import sunny from "./images/sunny.png"
import cloudy from "./images/cloudy.png"
import rainy from "./images/rainy.png"
const Fiveday = () => {

    const { data } = useSelector((store) => store.Data);
   
    const  getDayName = (dateStr, locale)=>{
        let date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'short' });        
    }

   
    
   
    

    return (
        <div className='fiveday'>

            {data.filter(item => item.dt_txt.split(" ")[1] === `12:00:00`).map((item,i) => (

                <div key={i} >
                    <p>{getDayName(item.dt_txt.split(" ")[0], "en-US")}</p>
                    <p>{`${(item.main.temp_min-273).toFixed(0)+'°C'} ${(item.main.temp_max-273).toFixed(0)+'°C'}` }</p>
                    <img src={(item.weather[0].main==="Rain")? rainy : (item.weather[0].main==="Clear")? sunny:cloudy } alt="" />
                    <p>{item.weather[0].main}</p>

                </div>
            ))}





        </div>
    );
}

export default Fiveday;
