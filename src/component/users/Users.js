import User from '../user/User';

export default function Users({items, userInfo}) {

    return (
        <div>
            {
                items.map(u => <User key={u.id} item={u} userInfo={userInfo}/>)
            }
        </div>
    );
}