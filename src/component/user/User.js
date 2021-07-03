import './User.css'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import userPost from "../userPost/UserPosts";



export default function User({item:{id, name, username, email, address, phone, website, company}}) {
    return (
        <div className='userCard'>

            <h3>
                {name}
            </h3>
            <p>
                {username}
            </p>
            <p>
                {phone}
            </p>
            <p>
                {email}
            </p>

            <Link to={'/users/'+id+'/posts'}>Показати пости</Link>


        </div>
    )


}