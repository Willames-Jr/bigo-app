import axios from 'axios';

const api = axios.create({
    // Por enquanto vou colocar os link locais e reais aqui, vamos só alternar qunado necessário
    baseURL: //'http://192.168.0.104:5000/api/v1/', 
            'https://bigu-api.herokuapp.com/api/v1/',
    validateStatus: status =>  {
        // Somente retorna o status HTTP (200, 404, 502 ...)
        return status; 
    }
});

export default api;