import './App.css'
import {useEffect, useState} from 'react';
import Users from './component/users/Users';
import {getPost, getPosts, getUser, getUserPost, getUsers} from "./component/api/Api";
import UserInfo from "./component/userInfo/UserInfo";
import Posts from "./component/userPost/Posts";
import UserPosts from "./component/userPost/UserPosts";


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

	// let [posts, setPosts] = useState([]);
	let [userPosts, setUserPosts] = useState(null);
	//
	// useEffect(()=> {
	// 	getPosts().then(({data}) =>	{setPosts(data)})
	// },[])

	function postCard(id) {
		getUserPost(id).then(({data}) =>

		{
			console.log(data);
			setUserPosts(data)})
	}


	return (

		<div className='wrap'>
			<div className='userList'>
				<p>СПИСОК КОРИСТУВАЧІВ</p>
				<Users items={users} userInfo={userInfo} postCard={postCard}/>
			</div>
			<div className='userInfo'>
				<p>ДОДАТКОВА ІНФОРМАЦІЯ</p>
				{userInform && <UserInfo item={userInform}/>}
			</div>
			<div className='cardPost'>
				<div className='postHeader'>
					<p>ПОСТИ</p>
					<button>Пказати коментарі</button>
				</div>

				{/*<Posts items={posts}/>*/}
				{userPosts &&<UserPosts item={userPosts}/>}
			</div>

			<div className='cardComment'>
				<div className='commentHeader'>
					<p>Коментарі</p>
				</div>
			</div>
		</div>
	);
}
