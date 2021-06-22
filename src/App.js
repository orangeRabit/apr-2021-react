import './App.css';
import Users from './components/users/Users';
import Menu from "./components/menu/Menu";

import Posts from "./components/posts/Posts";


export default function App() {
    return (
        <div>
            <div>
                <Menu pages={['user', 'post']}/>
            </div>

            <div className={'userAndPost'}>
                <Users/>
                <Posts/>

            </div>
        </div>
    );
}
