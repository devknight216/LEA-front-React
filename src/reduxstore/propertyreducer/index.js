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

export { getAllPropertiesFromAPI };