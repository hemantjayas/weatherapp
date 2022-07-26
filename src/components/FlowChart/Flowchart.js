import React from 'react';
import Chart from "react-apexcharts";
import "./flowchart.css"


const Flowchart = ({data}) => {

    const obj = {
        options: {
            chart: {
                type: "area",
                zoom: {
                    enabled: false,
                }
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                 curve: "smooth",
                 width:2

                 },

            xaxis: {
                lines: { show: false },
                categories: ["5 AM", "2 PM", "6 PM","9 PM"],
            },
            yaxis: {
                show: false

            },

            grid:{
                show:false
            },

            colors: ['#fedd4b']
        },
        series: [
            {
                name: "Temprature",
                data: [data.min,data.max, data.eve, data.night]
            }
        ]
    }

    return (
        <div className='flowchart'>

            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={obj.options}
                        series={obj.series}
                        type="area"
                        height="200px"
                        
                        margin="auto"


                    />
                </div>
            </div>
        </div>
    );
}

export default Flowchart;
