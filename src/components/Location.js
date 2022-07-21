// import React from 'react'
// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getData } from '../redux/getData/action';

// export default function Location() {
//     // let x = document.getElementById("demo");
//     const [latitude, setLatitude] = useState();
//     const [longitude, setLongitude] = useState();
//     const dispatch = useDispatch()

//     function getLocation() {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(showPosition);
//         } else {
//             console.log("worked not")
//         }
//     }

//     function showPosition(position) {
//         // x.innerHTML = "Latitude: " + position.coords.latitude +
//         //     "<br>Longitude: " + position.coords.longitude;
//         // let lati = position.coords.latitude
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude)
//         // let longi = position.coords.longitude
//     }



//     console.log(latitude, longitude)


//     getLocation()





//     const currentData = () => {

//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=6d8c931c766b7e9eeb84a8f6e42f5fc2&units=metric`).then(d => d.json()).then((city) => {
//             console.log(city);
//             dispatch(getData(city))


//         })
//     }   

    
//         setTimeout(() => {
//             if (longitude && latitude) {

//                 currentData()
//             }

//         }, 2000);
  











//     return (
//         <div>
//             <h1>hemant</h1>
//         </div>
//     )
// }
