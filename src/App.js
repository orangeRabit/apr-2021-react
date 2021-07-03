import Users from "./component/users/Users";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import userPost from "./component/userPost/UserPosts";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>Users page</Link>
            </div>
            <div>
                <Route exact path={'/users'} component={Users}/>
                <Route path={'/users/:id'} component={userPost}/>

            </div>
        </Router>

    );
}
