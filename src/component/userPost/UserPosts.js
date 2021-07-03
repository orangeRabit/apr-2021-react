
import {useEffect, useState} from "react";
import {getUsersPosts} from "../api/Api";
import Post from "./post";

export default function UserPosts(props) {
    let {match: {params: {id}}} = props;
    console.log(id);
    let [posts, setPosts] = useState([]);
    useEffect(()=> {
        getUsersPosts(id).then(response =>setPosts([...response.data]) )
    }, [id])
    return(


        <div>
            {posts.map(value => <Post item={value}/> )}
        </div>
    )
}