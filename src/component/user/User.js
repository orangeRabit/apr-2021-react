import './User.css'
export default function User({item, userInfo, postCard}) {

    return (
        <div className='userCard'>
            <h2>
                {item.id} - {item.name}
            </h2>
            <div className='btn'>
                <button onClick={()=>{
                    postCard(item.id)
                }}>Показати пости</button>
                <button onClick={()=>{
                    userInfo(item.id)}
                }>Показати додаткову інформацію</button>
            </div>


        </div>
    );
}