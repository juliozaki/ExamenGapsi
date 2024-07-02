import axios from 'axios';


export const gapsiApi = axios.create({
    baseURL: 'http://localhost:9090/supplier/'
});