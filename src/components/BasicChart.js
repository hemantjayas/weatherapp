import React, { useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import basic from "../components/basic.css"



const BasicChart = () => {
    const getTemp = (dateStr) => {
        let date = new Date(dateStr);
        return date.getDate();
    }

    const date = new Date();
    const dateNow = date.getDate()




    const { data } = useSelector((store) => store.Data);
    const arr = [];
    data.filter((item) => {
        if (getTemp(item.dt_txt) === dateNow) {
            arr.push(Math.floor(item.main.temp - 273))
            console.log(item)
        }
    });
    console.log("yahi hai kya")
    console.log(arr)



    const [categories, setCategories] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    const obj = {
        options: {
            chart: {
                id: "basic-bar",
                type: "area",
                zoom: {
                    enabled: false,
                }
            },
            datalabels: { enabled: false },
            stroke: { curve: "straight" },
            xaxis: {
                categories: categories
            }
        },
        series: [
            {
                name: "Temprature",
                data: arr, //[27, 28, 29, 31, 34,37,39,40,40,40,40,33,33,32,33,32,31]
            }
        ]
    }

    return (
        <>
            <div className="basicChart">
{/* <h1>{Math.floor(data[0].main.temp-273) +'°C' }</h1> */}

                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={obj.options}
                            series={obj.series}
                            type="area"
                            width="700"
                        />
                    </div>
                </div>

                <div className="pressure">
                    {/* <div>
                        <p>Pressure</p>
                        <p>{(data[0].main.pressure) + ` hpa`}</p>
                    </div>
                    <div>
                        <p>Humidity</p>
                        <p>{(data[0].main.humidity) + ` %`}</p>
                    </div> */}
                </div>
            </div>

        </>
    );

}

export default BasicChart;

