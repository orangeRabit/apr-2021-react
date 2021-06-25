export default function Post({item, postComment}) {
    return (
        <div>
            <h3>
                Пости користувача {item.userId}
            </h3>
            <p>
                {item.id} - {item.title}
            </p>
            <p>
                {item.body}
            </p>
            <button onClick={()=>{
                console.log(item.title);
                postComment(item.id)}
            }>Пказати коментарі</button>
        </div>
    )
};
