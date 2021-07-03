import './post.css'
import {Link} from "react-router-dom";

export default function Post({item: {userId, id, title, body}}){
    return(
        <div className='postCard'>
            <h3 className= 'postTitle'>{id} - {title}</h3>
            <p className='postBody'>{body}</p>
            <Link to={'/users/'+id+'/posts'+'/comments'}>Показати коментарі</Link>

        </div>
    )
}