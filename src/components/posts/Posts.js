
import Post from "../post/Post";

export default function Posts({item}) {

    return(

        <div>
            {item.map(p => <Post key={p.id} item={p}/> )}
        </div>
    )
}