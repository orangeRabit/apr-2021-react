import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const getUsers = () => axiosInstance('users')
const getUsersPosts = (id) => axiosInstance('users/'+id+'/posts')

export {getUsers, getUsersPosts}