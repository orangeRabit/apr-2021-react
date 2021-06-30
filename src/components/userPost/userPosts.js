
import userPost from "./userPost";

export default function UserPosts({item}) {

    return(

        <div>
            {item.map(p => <userPost key={p.id} item={p}/>)}
        </div>
    )
}