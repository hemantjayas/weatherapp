import React from 'react';
import '../weatherDetails/DetailWeather.css';
import rainy from '../images/rainy.png';
import sunny from '../images/sunny.png';
import Chart from "react-apexcharts";
import cloudy from '../images/cloudy.png';

export default function DetailWeather({ data }) {
    const dates = (timeStamp) => {
        const date = new Date(timeStamp * 1000).toDateString().split(" ");
        return date

    }

   

    return (

        <div>
            <div className="forecast">
                {data?.daily?.map((el, i) => (

                    <div key={i} >
                        <p>{dates(el.dt)[0]}</p>
                        <p>{`${(el.temp.min).toFixed(0) + '°'} ${(el.temp.max).toFixed(0) + '°'}`}</p>
                        <img src={(el.weather[0].main === "Rain") ? rainy : (el.weather[0].main === "Clear") ? sunny : cloudy} alt="" />
                        <p>{el.weather[0].main}</p>

                    </div>
                ))}
            </div>
        </div>

    )
}
