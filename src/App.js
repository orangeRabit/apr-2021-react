import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {getComments, getUserPost, getUsers} from "./services/api";
import './App.css'
import {useEffect, useState} from "react";
import Users from "./components/users/Users";

import Comments from "./components/comments/Comments";
import UserPosts from "./components/userPost/userPosts";


export default function App() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data)
        })
    }, [])

    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(response => {

            setComments(response.data)
        })
    }, [])

    let [userPostss, setUserPosts] = useState(null);

    function userPost(id) {
        getUserPost(id).then(({data}) => {
            setUserPosts(data)
            console.log(data);
        })
    }


    return (
        <Router>
            <div className='wrapper'>
                <div className='menu'>
                    <Link to="/users">users</Link>
                    <Link to="/posts">posts</Link>
                    <Link to="/comments">comments</Link>

                </div>

                <div className='pages'>
                    <Route path={'/users'} render={() => {
                        return <div><Users items={users} userPost={userPost}/></div>
                    }}/>
                    <Route path={'/posts'} render={() => {
                        return <div>
                            {!userPostss && <UserPosts item={userPostss}/>}

                        </div>


                    }}/>
                    <Route path={'/comments'} render={() => {
                        return <div><Comments item={comments}/></div>
                    }}/>
                </div>
            </div>


        </Router>

    );
}


