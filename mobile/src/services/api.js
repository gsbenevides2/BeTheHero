import axios from 'axios';
import { parse, stringify } from 'qs';

const api = axios.create({
    baseURL: 'https://google.gui.dev.br:3102',
    paramsSerializer: {
        encode: parse,
        serialize: stringify
    }
});

export default api;
