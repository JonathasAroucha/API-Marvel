import axios from 'axios';
import md5 from 'md5';

const publicKey = '706b0557d8f5944d1a80c1fbd40805d5'; //  5a28c6a89193588b8219a08fecbc4c1c  /  90eb22c42bb139b37c4fa2013218f9c8
const privateKey = 'ba392042dda6f89556baa2301dcca1b101139f81'; // 1baee09eab2399faea99a674549f879d8625adca  /  ec47711ee2453cb0fac6bad431f881771fb9c693

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: time,
        apikey: publicKey,
        hash,
    },
});

export default api;