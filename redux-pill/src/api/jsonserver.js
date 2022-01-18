import axios from 'axios';
import { useDispatch } from 'react-redux';
import http from '../services/httpservice';

const BASE_URL = 'http://localhost:3000';
// const getAll = async () => {
//     const response = await axios.get(url);
//     console.log(response.data.properties);
// }



export const asyncGetProperties = async (url = BASE_URL) => {
    return http.get(`${url}/properties`);
}


export const asyncApplyFilter = async (url = BASE_URL, filter, filterParams) => {
    const data = await http.get(`${url}/properties?${filter}=${filterParams}`)
    return data;
}


// export function getProperties() {

//     const properties = async (dispatch) => {
//         await getAll();
//         dispatch({
//             type: 'GET_PROPERTIES',
//             payload: properties
//         })
//         // console.log(dispatch)
//     }
// }
// https://youtu.be/fiesH6WU63I?t=1911
// const getProperties = CreateAsyncThunk(
//     'properties/getProperties',
//     async () => {
//         const response = await fetch(url)
//         if (response.ok) {
//             const todos = await response.json();
//             return todos;

//         }
//     }
// )


