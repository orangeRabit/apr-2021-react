import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsers = () => axiosInstance();
const getUser = (id) => axiosInstance('/' + id);
const getUserPost = (id) => axiosInstance('/' + id + '/posts')
export {getUsers, getUser, getUserPost};

let post = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

const  getPosts = () => post();
const  getPostComment = (postID) => post('/' + postID + '/comments')
export {getPostComment, getPosts};