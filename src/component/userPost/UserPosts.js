import Post from "./Post";

export default function UserPosts({item, postComment}) {

    return(

        <div>
            {item.map(p => <Post key={p.id} item={p} postComment={postComment}/> )}
        </div>
    )
}