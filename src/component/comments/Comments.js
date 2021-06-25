import Comment from "./Comment";

export default function Comments({item}) {
    return  (
        <div>
            {item.map(c => <Comment key={c.id} item={c}/>)}
        </div>
    )
}