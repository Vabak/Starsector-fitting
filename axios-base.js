import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://104.248.89.70/api/'
});

export default instance;