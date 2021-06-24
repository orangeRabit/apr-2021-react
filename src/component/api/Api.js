import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsers = () => axiosInstance();
const getUser = (id) => axiosInstance('/' + id);
export {getUsers, getUser};

let post = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

const  getPosts = () => post();
const  getPost = (userID) => post('/' + userID)
export {getPost, getPosts};