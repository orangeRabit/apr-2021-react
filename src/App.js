import './App.css'
import {useEffect, useState} from 'react';

import Users from './component/users/Users';
import {getUsers} from "./component/api/Api";

export default function App() {

	let [users, setUsers] = useState([]);

	useEffect(()=> {
		getUsers().then(response => {
			setUsers(response.data)
		})
	}, [])


	return (

		<div className='wrap'>
			<div className='userList'>
				<p>СПИСОК КОРИСТУВАЧІВ</p>
				<Users items={users}/>
			</div>
			<div className='userInfo'>
				<p>ДОДАТКОВА ІНФОРМАЦІЯ</p>

			</div>
		</div>
	);
}
