
export default function User({item}) {

    return (
        <div className='userCard'>
            <h2>
                {item.id} - {item.name}
            </h2>

        </div>
    );
}