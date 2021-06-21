import {useEffect, useState} from 'react';

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
		<div>
			{
				usersList
					.map(value => <div>{value.id} - {value.name}</div>)

			}

		</div>
	);
}
