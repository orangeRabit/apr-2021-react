export default function Comment({item}) {
    return(
        <div>
            <h2>
                Коментарі до поста - {item.postId}
            </h2>
            <h3>{item.id} - {item.name}</h3>
            <p>{item.email}</p>
            <p>{item.body}</p>
        </div>
    )
}