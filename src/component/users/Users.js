import User from '../user/User';

export default function Users({items, selectUser}) {

    return (
        <div>
            {
                items.map(u => <User key={u.id} item={u}/>)
            }
        </div>
    );
}