
import {GET_DATA} from "./actionTypes.js";

const init = {
data:[]

}


export const getDataReducer = (store = init, { type, payload }) => {
    switch (type) {

        case GET_DATA:
            return { ...store, data:payload }

        


        default:
            return { ...store }
    }
}