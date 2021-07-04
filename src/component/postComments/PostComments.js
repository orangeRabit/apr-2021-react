import {useEffect, useState} from "react";
import {getComments} from "../api/Api";
import './PostComments.css'

export default function PostComments(props) {
    let {match: {params: {id}}} = props;
    console.log(id);
    let [comments, setComments] = useState([])

    useEffect(()=> {
        getComments(id).then(response => {
            setComments([...response.data])
        })
    })
    return(
        <div>
            {comments.map(value =>
                <div className='commentCard'>
                    <h4 className='commentHeader'>Коментар до {value.postId} поста </h4>
                    <p>Від користувача {value.email}</p>
                     <p className='commentName'>{value.name}</p>
                     <p className='commentBody'>{value.body}</p>
                </div>

            )}
        </div>
    )
}