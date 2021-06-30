import axios from 'axios';

let axiosInstanceUsers = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});let axiosInstancePosts = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});let axiosInstanceComments = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
});

const getUsers = () => axiosInstanceUsers();
const getPosts = () => axiosInstancePosts();
const getComments = () => axiosInstanceComments();
const getUserPost = (id) => axiosInstanceUsers('/' + id + '/posts')

export {getUsers, getPosts, getComments, getUserPost};