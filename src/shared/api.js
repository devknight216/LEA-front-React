import axios from "axios";

const backend_url = `${process.env.REACT_APP_BACKEND_API_URL}/api/`

//Contact US API
export const contactus = ( requestbody ) => {
    axios.post(
        backend_url + 'email/contact-us',
        requestbody,
        {
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }
    )
}

//Email Verify API
export const emailVerify = async ( token ) => {
    return await axios.get(
        `${backend_url}/users/verify/${token}`,
        {
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    )
}
