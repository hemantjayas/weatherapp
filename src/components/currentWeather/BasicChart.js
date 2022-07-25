import Chart from "react-apexcharts";
import '../currentWeather/basic.css'
import sunny from "../images/sunny.png"
import cloudy from "../images/cloudy.png"
import { useState } from "react";
import rainy from "../images/rainy.png"
import Flowchart from "../FlowChart/Flowchart";


const BasicChart = ({ data }) => {
const weather = data.current.weather[0].main;
const currentTemp=data.current.temp;
const pressure =data.current.pressure;
const humidity =data.current.humidity;
const sunrise = data.current.sunrise;
const sunset = data.current.sunset;
const allDayTemp = data.daily[0].temp;
    // console.log(data);
    const [tracker, setTracker] = useState();

    const temp = [];
    const time = [];
    function timeArray(timeStamp) {
        let timer = new Date(timeStamp * 1000);
        return timer.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    }
    
    data.hourly.map((el, i) => {
        if (i < 12) {
            temp.push(el.temp);
            time.push(timeArray(el.dt))
            
        }

    });


    const obj = {
        options: {
            chart: {
                id: "basic-bar",
                type: "area",
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: { enabled: false },
            stroke: {
                curve: "smooth",
                lineCap: "round"
            },
            xaxis: {
                categories: time,
            }
        },
        series: [
            {
                name: "Temprature",
                data: temp, //[27, 28, 29, 31, 34,37,39,40,40,40,40,33,33,32,33,32,31]
            }
        ]
    }
    
    const dates = (timeStamp) => {
        const date = new Date(timeStamp * 1000).toDateString().split(" ");
        return date
        
    }


    

    const handleForecast = (el, i) => {
        setTracker(i)
    }
    
  
     


      

    

    
    return (
        <div>

            <div className="forecast">
                {data?.daily?.map((el, i) => (

                    <div className={tracker===i? "dayForecastOnclick":"dayForecast"} key={i} onClick={()=>{handleForecast(el, i)}} >
                        <p>{dates(el.dt)[0]}</p>
                        <p>{`${(el.temp.min).toFixed(0) + '°'} ${(el.temp.max).toFixed(0) + '°'}`}</p>
                        <img src={(el.weather[0].main === "Rain") ? rainy : (el.weather[0].main === "Clear") ? sunny : cloudy} alt="" />
                        <p>{el.weather[0].main}</p>

                    </div>
                ))}
            </div>

            <div className="basicChart">
                <div id="forcast">
                    <h1>{`${(currentTemp).toFixed(0)}°C`}</h1>
                    <img src={(weather === "Rain") ? rainy : (weather === "Clear") ? sunny : cloudy} alt="" />

                </div>


                <div className="row daychart">
                    <div className="mixed-chart">
                        <Chart
                            options={obj.options}
                            series={obj.series}
                            type="area"
                            width="1500px"
                            height="300px"

                        />
                    </div>
                </div>

                <div className="pressure">
                    <div>
                        <h4>Pressure</h4>
                        <p>{`${pressure} hpa`}</p>
                    </div>
                    <div>
                        <h4>Humidity</h4>
                        <p>{`${humidity} %`}</p>
                    </div>
                </div>
                <div id="sunrise">
                    <div >
                        <h4>Sunrise</h4>
                        <p>{`${timeArray(sunrise)}`}</p>
                    </div>
                    <div>
                        <h4>Sunset</h4>
                        <p>{`${timeArray(sunset)}`}</p>
                    </div>
                </div>

                <Flowchart data={allDayTemp} />
            </div>

        </div>
    );

}

export default BasicChart;

