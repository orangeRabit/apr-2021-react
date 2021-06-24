import Post from "./Post";

export default function Posts({items}) {
    return(
        <div>
            {
                items.map(p => <Post key={p.id} item={p}/>)
            }
        </div>

    )
}