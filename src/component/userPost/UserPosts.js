import Post from "./Post";

export default function UserPosts({item}) {

    return(

        <div>
            {item.map(p => <Post key={p.id} item={p}/> )}
        </div>
    )
}