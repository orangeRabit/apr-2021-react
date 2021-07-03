import {useEffect, useState} from "react";
import {getUsers} from "../api/Api";
import User from "../user/User";
import './Users.css'
import userPost from "../userPost/UserPosts";
import {Route} from "react-router-dom";


export default function Users() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(response => {
            setUsers([...response.data])
        })
    })
    return (

        <div>
            <div className='usersHeder'>
                <h4>Ім'я</h4>
                <h4>Нікнейм</h4>
                <h4>Телефон</h4>
                <h4>Ел. пошта</h4>
            </div>
            {users.map(value => <User key={value.id} item={value}/>)}


        </div>
    )

}
