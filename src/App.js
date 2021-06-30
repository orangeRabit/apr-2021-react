import {getUsers} from "./api/Api";
import {useReducer} from "react";
import Users from "./user/Users";
function reducer (state, action) {
	console.log(state);
	switch (action.type) {

		case 'getUser':
			let usersArr;
			getUsers().then(response => {state.arr(response.data)})

			return {...state}
		default:
			return {state};
	}
}

export default function App() {

	// let [users, setUsers] = useState([]);
	// useEffect(() => {
	// 	getUsers().then(response => {
	// 		setUsers(response.data)
	// 	})
	// }, [])

	let [state, dispatch] = useReducer(reducer, {arr: []})
	return (
		<div>
			<button onClick={()=>{dispatch({type: 'getUsers'})}}>show user</button>
		{/*<Users items={state.arr}/>*/}

		</div>
	);
}
