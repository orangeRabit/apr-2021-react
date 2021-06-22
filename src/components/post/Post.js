import './post.css'

export default function Post({item: {userId, id, title, body}}) {
    let postCard = 'postCard'


    return (
        <div className={postCard}>
            <h3>{id} - {title}</h3>
            <p>{body}</p>
        </div>
    )
}