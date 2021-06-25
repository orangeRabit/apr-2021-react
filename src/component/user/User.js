import './User.css'
export default function User({item, userInfo, postCard}) {

    return (
        <div className='userCard'>
            <h2>
                {item.id} - {item.name}
            </h2>


                <button onClick={()=>{
                    userInfo(item.id)
                    postCard(item.id)
                }
                }>Показати додаткову інформацію та пости</button>



        </div>
    );
}