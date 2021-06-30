import './User.css'
export default function User({item, userPost}) {

    return (
        <div className='userCard'>
            <h2>
                {item.id} - {item.name}
            </h2>
            <hr/>
            <div className='info'>
                <p>{item.username}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
                <p>{item.website}</p>
            </div>
            <hr/>
            <button onClick={()=>{userPost(item.id)}}>Отримати пости</button>


        </div>
    );
}