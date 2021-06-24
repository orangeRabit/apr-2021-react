import './App.css'
import {useEffect, useState} from 'react';
import Users from './component/users/Users';
import {getUser, getUsers} from "./component/api/Api";
import UserInfo from "./component/userInfo/UserInfo";


export default function App() {

	let [users, setUsers] = useState([]);

	let [userInform, setUserInform] = useState(null);

	useEffect(()=> {
		getUsers().then(response => {setUsers(response.data)})
	}, [])

	function userInfo(id) {
		getUser(id).then(({data}) => {
			console.log(data);
			setUserInform(data)});
	}


	return (

		<div className='wrap'>
			<div className='userList'>
				<p>СПИСОК КОРИСТУВАЧІВ</p>
				<Users items={users} userInfo={userInfo}/>
			</div>
			<div className='userInfo'>
				<p>ДОДАТКОВА ІНФОРМАЦІЯ</p>
				{userInform && <UserInfo item={userInform}/>}
			</div>






		</div>
	);
}
