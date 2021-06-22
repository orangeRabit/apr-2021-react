import {useEffect, useState} from "react";
import Post from "../post/Post";

export default function Posts() {

    let [postList, setPostList] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(response => {
                setPostList(response);
            });
    }, []);

    return (
        <div className={'allPost'}>
            {postList.map(value => <Post key={value.id} item={value}/>)}
        </div>
    );
}