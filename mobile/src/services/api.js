import exios from 'axios';

const api = exios.create({
    baseURL: 'http://192.168.100.8:3333'
});

export default api;