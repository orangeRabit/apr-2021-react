import User from '../user/User';

export default function Users({items, userPost}) {

    return (
        <div>
            {
                items.map(u => <User key={u.id} item={u} userPost={userPost}/>)
            }
        </div>
    );
}

