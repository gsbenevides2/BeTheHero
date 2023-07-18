import axios from 'axios';

const api = axios.create({
 baseURL: 'http://google.gui.dev.br:3002',
})

export default api;
