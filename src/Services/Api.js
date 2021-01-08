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
const getWalletBalance = (id, password) => {
    return new Promise((resolve, reject) => {
        let bodyFormData = new FormData();
        bodyFormData.append('userId', Number(id));
        bodyFormData.append('password', password);
        axios.post('http://scriptwebsolution.in/project/bitcoin/api/users/getwallet.json', bodyFormData)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
    });
}


const createPayment = (userId, password, toUserId, amounts, fee) => {
    return new Promise((resolve, reject) => {
        let bodyFormData = new FormData();
        bodyFormData.append('userId', userId);
        bodyFormData.append('password', password);
        bodyFormData.append('toAddress', toUserId);
        bodyFormData.append('amounts', amounts);
        bodyFormData.append('fee', fee);

        axios.post('http://scriptwebsolution.in/project/bitcoin/api/users/makepayment.json', bodyFormData)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
    });
}


const getUser = (email) => {
    return new Promise((resolve, reject) => {
        let bodyFormData = new FormData();
        bodyFormData.append('email', email);

        axios.post('http://scriptwebsolution.in/project/bitcoin/api/users/getuser.json', bodyFormData)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
    });
}


const getChartData = (startDate) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&start=${startDate}&format=json`)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
    });
}


const getCurrentBtcPrice = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://blockchain.info/ticker')
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
    });
}


const getStatements = (userId) => {
    return new Promise((resolve, reject) => {
        let bodyFormData = new FormData();
        bodyFormData.append('userId', userId);

        axios.post('http://scriptwebsolution.in/project/bitcoin/api/users/history.json', bodyFormData)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
    });
}

export { createUser, loginUser, getWalletBalance, createPayment, getUser, getChartData, getCurrentBtcPrice, getStatements };
