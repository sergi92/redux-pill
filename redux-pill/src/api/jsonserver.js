import axios from "axios";
import { stringify } from "query-string";
export const BASE_URL = 'http://localhost:3000';



// export const asyncGetProperties = async (url = BASE_URL) => {
//     return http.get(`${url}/properties`);
// }





export async function getProperties(filter) {
    const {
        type,
        condition,
        rooms,
        bathrooms,
        min_price,
        max_price,
        swimming_pool,
        terrace,
        garden,
        air_conditioning,
        pets,
        search,
        size,
        publication_date
    } = filter;

    const response = await axios({
        baseURL: BASE_URL,
        url: "/properties",
        method: "GET",
        params: {
            type,
            condition,
            rooms,
            bathrooms,
            min_price,
            max_price,
            swimming_pool,
            terrace,
            garden,
            air_conditioning,
            pets,
            search,
            size,
            publication_date
        },
        paramsSerializer: stringify,
    });

    return response.data;
}






