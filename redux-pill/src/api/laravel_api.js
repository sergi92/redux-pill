import axios from "axios";

const laravel_URL = 'http://localhost:8100'


export async function laravelRegister(name, email, password, confirm_password) {
    const url = `${laravel_URL}/api/register`
    console.log(url)
    return await axios(
        {
            method: 'POST',
            url: url,
            params: {
                name: name,
                email: email,
                password: password,
                confirm_password: confirm_password
            }
        }
    )
}


export async function laravelLogin(email, password) {
    const url = `${laravel_URL}/api/login`
    console.log(url)
    return await axios(
        {
            method: 'POST',
            url: url,
            params: {
                email: email,
                password: password,
            }
        }
    ).then(response => {
        const result = response.data.data
    })
}






