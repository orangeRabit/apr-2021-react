export default function Post({item}) {
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

        </div>
    )
}
