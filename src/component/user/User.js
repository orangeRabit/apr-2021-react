import './User.css'
export default function User({item, selectUser}) {

    return (
        <div className='userCard'>
            <div>
                {item.id} - {item.name}
            </div>

            <button>Показати додаткову інформацію</button>

        </div>
    );
}