import Users from "./component/users/Users";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
// import UserPosts from "./component/userPost/UserPosts";
import PostComments from "./component/postComments/PostComments";
import UserPosts from "./component/userPost/UserPosts";
import './App.css'

export default function App() {
    return (
        <Router>
            <div className='menu'>
                <NavLink className='homeLink' to={'/'}>Домашня сторінка</NavLink>
                <NavLink className='userLink' to={'/users'}><img src="/public/userLogo.png" alt=""/>Сторінка з користувачами</NavLink>
            </div>

            <div>
                <Switch>
                    <Route exact path={'/users'} component={Users}/>
                    <Route path={'/users/:id'} component={UserPosts}/>
                    <Route path={'/posts/:id'} component={PostComments}/>
                    <Route path={'/'}/>

                </Switch>

            </div>
        </Router>

    );
}
