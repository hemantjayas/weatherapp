import React from 'react'
import { useState, useEffect } from 'react';

export default function Location() {
    // let x = document.getElementById("demo");
    const [latitude, setLatitude] = useState();


    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("worked not")
        }
    }

    function showPosition(position) {
        // x.innerHTML = "Latitude: " + position.coords.latitude +
        //     "<br>Longitude: " + position.coords.longitude;
        // let lati = position.coords.latitude
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        // let longi = position.coords.longitude
        setTimeout(() => {
            currentData(latitude, longitude)
        }, 0);
    }

    getLocation()

    const currentData = (latitude, longitude) => {
       
    }

    return (
        <div>
            <h1>hemant</h1>
        </div>
    )
}
