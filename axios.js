import axios from 'axios';


const instance = axios.create({
    baseURL: "https://peaceful-sea-66933.herokuapp.com",
    responseType: 'json',
    withCredentials: true
});

export default instance;