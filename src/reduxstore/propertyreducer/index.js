import axios from 'axios';

const getAllPropertiesFromAPI = async () => {
    const backend_url = `${process.env.REACT_APP_BACKEND_API_URL}/api/property`;
    const res = axios.get(
        backend_url,
        {
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    );
    return res;
}

const getPropertyByIdFromAPI = async ( id ) => {
    const backend_url = `${process.env.REACT_APP_BACKEND_API_URL}/api/property/${id}`;
    const res = axios.get(
        backend_url,
        {
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    );
    return res;
}

const deletePropertyByIdFromAPI = async ( id ) => {
    const backend_url = `${process.env.REACT_APP_BACKEND_API_URL}/api/property/${id}`;
    const res = axios.delete(
        backend_url,
        {
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    );
    return res;
}
const updatePropertyByIdFromAPI = async ( id, requestBody ) => {
    const backend_url = `${process.env.REACT_APP_BACKEND_API_URL}/api/property/${id}`;
    const res = axios.put(
        backend_url,
        requestBody,
        {
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    );
    return res;
}

const craeteNewPropertFromAPI = async ( requestBody ) => {
    const backend_url = `${process.env.REACT_APP_BACKEND_API_URL}/api/property`;
    const res = axios.post(
        backend_url,
        requestBody,
        {
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    );
    return res;
}

export { getAllPropertiesFromAPI, getPropertyByIdFromAPI, deletePropertyByIdFromAPI, updatePropertyByIdFromAPI, craeteNewPropertFromAPI };