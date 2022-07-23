import React from 'react';
import { useState,useEffect } from 'react';
import pin from '../images/pin.png';
import '../search/Search.css';
import { GEO_CITY_URL, geoCityOptions } from '../api';
import { AsyncPaginate } from 'react-select-async-paginate';

export default function Search({ onSearchChange }) {
    const [search, setSearch] = useState(null);
    // const [inputValue, setinputValue] = useState(undefined);
    // const [trigger, settrigger] = useState(true);


    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)

        // console.log(search)
    };

    const loadOptions = (inputValue) => {

       return fetch(`${GEO_CITY_URL}/cities?&minPopulation=100000&namePrefix=${inputValue}`, geoCityOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='search'>
            <AsyncPaginate
                placeholder="Search"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
            <img id='pin' src={pin} alt="" />
        </div>
    )
}
