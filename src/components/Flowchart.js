import React from 'react';
import Chart from "react-apexcharts";
import flow from "../components/flowchart.css"


const Flowchart = () => {
    const obj = {
        options: {
            chart: {
                type: "area",
                zoom: {
                    enabled: false,
                }
            },
            datalabels: {
                enabled: false,
            },
            stroke: { curve: "smooth" },
            grid: {
                show: false,
                xaxis: {
                    lines: { show: false },
                    categories: [1,2,3],
                },
                yaxis: {
                    show: true

                },
            },
            colors: ['#fedd4b']
        },
        series: [
            {
                name: "Temprature",
                data: [0, 1, 0]
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


                    />
                </div>
            </div>
        </div>
    );
}

export default Flowchart;
