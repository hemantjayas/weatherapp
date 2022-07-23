import Chart from "react-apexcharts";
import '../currentWeather/basic.css'
import sunny from "../images/sunny.png"
import cloudy from "../images/cloudy.png"
import rainy from "../images/rainy.png"
import Flowchart from "../FlowChart/Flowchart";


const BasicChart = ({data}) => {
    const temp = [];
    const time = [];
   function timeArray(timeStamp) {
    let timer = new Date(timeStamp*1000);
     return timer.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true })
   }

   data.hourly.map((el,i)=>{
       if (i < 9) {
           temp.push(el.temp);
           time.push(timeArray(el.dt))
           
       }

   });


    const obj = {
        options: {
            chart: {
                id: "basic-bar",
                type: "area",
                width: "1000px",
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

    return (
       <div>
            <div className="basicChart">
                <div id="forcast">
                    <h1>{`${(data.current.temp).toFixed(0)}°C` }</h1>
                    <img src={(data.current.weather[0].main === "Rain") ? rainy : (data.current.weather[0].main === "Clear") ? sunny : cloudy} alt="" />
                    
                </div>


                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={obj.options}
                            series={obj.series}
                            type="area"

                        />
                    </div>
                </div>

                <div className="pressure">
                    <div>
                        <h4>Pressure</h4>
                        <p>{`${data.current.pressure} hpa`}</p>
                    </div>
                    <div>
                        <h4>Humidity</h4>
                        <p>{`${data.current.humidity} %`}</p>
                    </div>
                </div>
                <div id="sunrise">
                    <div >
                        <h4>Sunrise</h4>
                        <p>{`${timeArray(data.current.sunrise)}`}</p>
                    </div>
                    <div>
                        <h4>Sunset</h4>
                        <p>{`${timeArray(data.current.sunset)}`}</p>
                    </div>
                </div>

            <Flowchart data={data} />
            </div>

        </div>
    );

}

export default BasicChart;

