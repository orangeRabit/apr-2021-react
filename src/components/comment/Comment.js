import './Comment.css'

export default function Comment({item}) {
    return (
        <div className='comment'>

            <h3>
                Коментар {item.id} - {item.name}
            </h3>
            <p>
                <hr/>
                Електронна адреса користувача - {item.email}
                <hr/>
            </p>
            <p>
                {item.body}
            </p>


        </div>
    )
};