import{ GET_DATA} from "./actionTypes.js"


 export const getData = (payload) => (
    {
        type: GET_DATA,
        payload,
    }
);

