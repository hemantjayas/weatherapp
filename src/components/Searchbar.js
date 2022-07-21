// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector} from 'react-redux';
// import Search from "../components/Search.css"
// import pin from "./images/pin.png";
// import searchimg from "./images/search.png"
// import { getData } from "../redux/getData/action.js"

// const Searchbar = () => {
//     const [city, setCity] = useState("hathras");
//     const dispatch = useDispatch();
   

//     useEffect(() => {
//         getdatafromAPI()
//     }, []);

//     const getdatafromAPI = () => {
//         fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6d8c931c766b7e9eeb84a8f6e42f5fc2`).then(d => d.json()).then((res) => {
//             dispatch(getData(res.list))
//         });
//     }

    
    

//     return (
//         <div className='search'>
//             <input type="text" placeholder='Search'/>
//             <img id='pin' src={pin} alt="" />
//             <img id='searchimg' src={searchimg} alt="" />
//         </div>
//     );
// }

// export default Searchbar;
