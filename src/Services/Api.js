import axios from 'axios';
const access_token = 'r75r3eghodwei9f8hneuod8ewg';

const createApiClient = () => {
    const api = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 1000,
        headers: { 'Authorization': `Bearer ${access_token}` }
    });

    const loginUser = data => api.post('/login', data)
    //kickoff our api functions
    return {
        loginUser,
    };
};

export default { createApiClient };
