// import React, { useState } from "react";
// import Chart from "react-apexcharts";
// import { useSelector } from "react-redux";
// import basic from "../components/basic.css"
// import sunny from "./images/sunny.png"
// import cloudy from "./images/cloudy.png"
// import rainy from "./images/rainy.png"
// import Flowchart from "./Flowchart";



// const BasicChart = () => {
//     const getTemp = (dateStr) => {
//         let date = new Date(dateStr);
//         return date.getDate();
//     }

//     const date = new Date();
//     const dateNow = date.getDate()




//     const { data } = useSelector((store) => store.Data);
//     // console.log(data);
//     const arr = [];
//     const time = []
    
//     data.filter((item, i) => {
//         if (i < 8) {
//             arr.push(Math.floor(item.main.temp - 273));
//             time.push(item.dt_txt);

//         }



//     });
//     // console.log(arr)
//     // console.log(time)




//     const obj = {
//         options: {
//             chart: {
//                 id: "basic-bar",
//                 type: "area",
//                 zoom: {
//                     enabled: false,
//                 },
               
//             },
//             dataLabels: {enabled:false},
//             stroke: { curve: "smooth",
//             lineCap:"round"
        
//         },
//             xaxis: {
//                 type: "datetime",
//                 categories: time,
//                 tooltip: {
//                     x: {
//                         format: 'HH:mm'
//                     },
//                 },
//             }
//         },
//         series: [
//             {
//                 name: "Temprature",
//                 data: arr, //[27, 28, 29, 31, 34,37,39,40,40,40,40,33,33,32,33,32,31]
//             }
//         ]
//     }

//     return (
//         <div>
//             <div className="basicChart">
//                 <div id="forcast">
//                     <h1>{35+'°C' }</h1>
//                     <img src={cloudy} alt="" />
//                 </div>


//                 <div className="row">
//                     <div className="mixed-chart">
//                         <Chart
//                             options={obj.options}
//                             series={obj.series}
//                             type="area"

//                         />
//                     </div>
//                 </div>

//                 <div className="pressure">
//                     <div>
//                         <h4>Pressure</h4>
//                         <p>{1000 + ` hpa`}</p>
//                     </div>
//                     <div>
//                         <h4>Humidity</h4>
//                         <p>{54 + ` %`}</p>
//                     </div>
//                 </div>
//                 <div id="sunrise">
//                     <div >
//                         <h4>Sunrise</h4>
//                         <p>5:26am</p>
//                     </div>
//                     <div>
//                         <h4>Sunset</h4>
//                         <p>7:16pm</p>
//                     </div>
//                 </div>

//                 <Flowchart />
//             </div>



//         </div>
//     );

// }

// export default BasicChart;

