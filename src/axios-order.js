import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-5d6e4-default-rtdb.firebaseio.com/'
})

export default instance;