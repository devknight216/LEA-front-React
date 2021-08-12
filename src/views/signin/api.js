import axios from "axios"
export const login = async( user ) => {
    const backendurl = `${process.env.REACT_APP_BACKEND_API_URL}/api/users/login`
    const res = await axios.post(
        backendurl,
        JSON.stringify(user),
        {
            headers:{
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            }
        }
    )
    return res;

}