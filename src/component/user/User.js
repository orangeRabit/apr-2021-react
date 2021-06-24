import './User.css'
export default function User({item, userInfo}) {

    return (
        <div className='userCard'>
            <h2>
                {item.id} - {item.name}
            </h2>

            <button onClick={()=>{
                userInfo(item.id)}
            }>Показати додаткову інформацію</button>

        </div>
    );
}