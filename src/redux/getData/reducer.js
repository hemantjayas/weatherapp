
import { GET_DATA } from "./actionTypes.js";
import { getData } from "./action.js";

const init = {
    currentWeather: {},

}


export const getDataReducer = (store = init, { type, payload }) => {
    switch (type) {

        case GET_DATA:
            return { ...store, currentWeather:{...payload} }




        default:
            return { ...store }
    }
}