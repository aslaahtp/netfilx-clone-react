import axios from 'axios'
import {baseUrl} from './Components/constants/constants'
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
  });
export default instance;