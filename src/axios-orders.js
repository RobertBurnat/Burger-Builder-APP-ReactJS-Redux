import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://react-burger-builder-e3b75.firebaseio.com/'
});

export default instance;