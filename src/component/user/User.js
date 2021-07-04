import './User.css'
import {Link} from "react-router-dom";




export default function User({item:{id, name, username, email, address, phone, website, company}}) {
    return (
        <div className='userCard'>
            <img src='/public/userLogo.png' alt="userLogo"/>
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