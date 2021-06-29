import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {getComments, getPosts, getUsers} from "./services/api";
import './App.css'
import {useEffect, useState} from "react";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";


export default function App() {
    let [users, setUsers] = useState([]);
    useEffect(()=> {
        getUsers().then(response => {setUsers(response.data)})
    }, [])
    let [posts, setPosts] = useState([]);
    useEffect(()=> {
        getPosts().then(response => {
            console.log(response);
            setPosts(response.data)})
    }, [])
    let [comments, setComments] = useState([]);
    useEffect(()=> {
        getComments().then(response => {
            console.log(response);
            setComments(response.data)})
    }, [])


    return (
        <Router>
            <div className='wrapper'>
                <div className='menu'>
                    <Link to="/users">users</Link>
                    <Link to="/posts">posts</Link>
                    <Link to="/comments">comments</Link>

                </div>

                <div className='pages'>
                    <Route path={'/users'} render={()=>{return <div><Users items={users}/></div>}}/>
                    <Route path={'/posts'} render={()=>{return <div><Posts item={posts}/> </div>}}/>
                    <Route path={'/comments'} render={()=>{return <div><Comments item={comments}/> </div>}}/>
                </div>
            </div>



        </Router>

    );
}


