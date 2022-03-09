import axios from "axios";

const baseURL = 'https://pokeapi.co/api/v2/';

const instance = axios.create({
    baseURL
});


const call = async (_type, _endpoint, _body) => {

    let _data = undefined;
    switch (_type) {
        case 'get':
        _data = await instance.get(_endpoint);
        break;
        case 'post':
        _data = await instance.post(_endpoint, _body);
        break;
        case 'put':
        _data = await instance.put(_endpoint, _body);
        break;
        case 'delete':
        _data = await instance.delete(_endpoint, _body);
        break;
        default:
        throw new Error('Not allowed method')
    }
    return _data;
}
 

async function callAPI(type, endpoint, options = { data : {} }) {
    const data = await call(type, endpoint, options.data);
    return data;
}


export default callAPI;
