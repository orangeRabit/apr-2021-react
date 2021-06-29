import './Post.css'

export default function Post({item}) {
    return (
        <div className='post'>
            <h3>
                Пост {item.id}
            </h3>
            <p>
                <hr/>
                {item.title}
                <hr/>
                {item.body}
            </p>

        </div>
    )
};