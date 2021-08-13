import axios from 'axios';

const SignInWithAPI = async (payload) => {
    const backend_url = `${process.env.REACT_APP_BACKEND_API_URL}/api/users/login`;
    const res = await axios.post(
        backend_url,
        payload,
        {
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    );
    return res;
}

const SignUpWithAPI = async (payload) => {
    const backend_url = `${process.env.REACT_APP_BACKEND_API_URL}/api/users/register`;
    const res = await axios.post(
        backend_url,
        payload,
        {
            headers:{
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    );
    return res;
}

export { SignInWithAPI, SignUpWithAPI };