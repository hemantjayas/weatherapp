import React from 'react';
import { useState, useEffect } from 'react';
import searchimg from "../images/search.png";
import pin from '../images/pin.png';
import '../search/Search.css';
import { GEO_CITY_URL, geoCityOptions } from './api';
import { AsyncPaginate } from 'react-select-async-paginate';
import { useCallback } from 'react';

export default function Search({ onSearchChange }) {
    const [search, setSearch] = useState(null);

    const handleOnChange = (e) => {
        const searchData = e.target.value;
        console.log(searchData)

        fetch(`${GEO_CITY_URL}/cities?&minPopulation=300000&namePrefix=${searchData}`, geoCityOptions)
            .then(response => response.json())
            .then(response => {
                setSearch(response.data);
                console.log(search)
            })
            .catch(err => console.error(err));
        // console.log(search)
        // onSearchChange()
    };

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null
                func.apply(context, args)
            }, 1000);
        }
    }

    const optimisedVersion = useCallback(debounce(handleOnChange), [])


    return (
        <div className='search'>
            <input type="text" placeholder='Search' onChange={optimisedVersion} />
            <img id='pin' src={pin} alt="" />
            <img id='searchimg' src={searchimg} alt="" />

            {search?.length > 0 &&
                <div className='autoComplete'>{search?.map((el, i) => <h4 key={i}>{`${el.city}, ${el.region}, ${el.countryCode}`}</h4>)}</div>
            }
        </div>
    )
}
