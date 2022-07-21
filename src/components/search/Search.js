import React from 'react';
import { useState, useEffect } from 'react';
import searchimg from "../images/search.png";
import pin from '../images/pin.png';
import '../search/Search.css';
import { GEO_CITY_URL, geoCityOptions } from './api';
import { useCallback } from 'react';

export default function Search({ onSearchChange }) {
    const [search, setSearch] = useState();
    const [inputValue, setinputValue] = useState(undefined);
    const [trigger, settrigger] = useState(true);


    const handleOnChange = (e) => {
        const { value } = e.target;
        // console.log(e.target.value)
        // console.log({value});



        fetch(`${GEO_CITY_URL}/cities?&minPopulation=300000&namePrefix=${value}`, geoCityOptions)
            .then(response => response.json())
            .then(response => {
                setSearch(response.data);

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

    const handleSearchResult = (el) => {
        console.log(el);
        setinputValue(`${el.city}, ${el.region}, ${el.countryCode}`);
        settrigger(false)



    }

    const optimisedVersion = useCallback(debounce(handleOnChange), [])

    console.log(search)
    return (
        <div className='search'>
            <input type="text" placeholder='Search' value={inputValue} onChange={optimisedVersion} />
            <img id='pin' src={pin} alt="" />
            <img id='searchimg' src={searchimg} alt="" />

            {search?.length > 0 &&
                <div className={trigger ? "autoComplete" : "endComplete"}>{search?.map((el, i) => <h4 onClick={() => { handleSearchResult(el) }} key={i}>{`${el.city}, ${el.region}, ${el.countryCode}`}</h4>)}</div>
            }
        </div>
    )
}
