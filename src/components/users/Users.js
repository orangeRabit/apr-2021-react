import {useEffect, useState} from 'react';
import User from "../user/User";

export default function Users() {


	let [usersList, setUsersList] = useState([]); // [.....user]

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(value => value.json())
			.then(response => {
				console.log(response);
				setUsersList(response);
			});
	}, []);

	return (
		<div className='wrap'>
			{usersList.map(value => <User key={value.id} item={value}/> )}
		</div>
	);
}
