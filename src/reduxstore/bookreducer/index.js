import axios from 'axios';

export const createReservationFromAPI = async(reqbody) => {
    const backendurl=`${process.env.REACT_APP_BACKEND_API_URL}/api/reservation`;
    const token  = localStorage.getItem('token');
    const res = await axios.put(
        backendurl,
        JSON.stringify(reqbody),
        {
            headers:{
                'Authorization': `${token}`,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            }
        }
    )
    return res;
}

export const getReservationByIdFromAPI = async(id) =>{
    const backendurl=`${process.env.REACT_APP_BACKEND_API_URL}/api/reservation`;
    const token  = localStorage.getItem('token');    
    const res = await axios.get(
        `${backendurl}/${id}`,
        {
            headers:{
                'Authorization': `${token}`,
                'X-Requested-With': 'XMLHttpRequest',
            }
        }
    )
    return res;
}