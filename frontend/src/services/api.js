import axios from 'axios';

const api = axios.create({
 baseURL: 'https://google.gui.dev.br:3102',
})

export default api;
