import axios from 'axios';
const access_token = 'r75r3eghodwei9f8hneuod8ewg';

// const api = axios.create({
//     baseURL: 'http://scriptwebsolution.in/project/bitcoin/api/users',
//     timeout: 1000,
//     // headers: { 'Authorization': `Bearer ${access_token}` }
// });

const createUser = data => {
    return new Promise((resolve, reject) => {
        axios.post('http://scriptwebsolution.in/project/bitcoin/api/users/signup.json', data)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
    });
}

const loginUser = data => {
    return new Promise((resolve, reject) => {
        axios.post('http://scriptwebsolution.in/project/bitcoin/api/users/login.json', data)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
    });
}

export { createUser, loginUser };
