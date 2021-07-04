import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const getUsers = () => axiosInstance('users')
const getUsersPosts = (id) => axiosInstance('users/'+id+'/posts')

export {getUsers, getUsersPosts}

let axiosInstancePosts = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts/'
})

const getComments = (id) => axiosInstancePosts(id + '/comments')

export {getComments}