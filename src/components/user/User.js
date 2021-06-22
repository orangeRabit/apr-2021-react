import './User.css'

export default function User({item: {id, name, username, email, address, phone, company}}) {

    let userCard = 'userCard'
    let compCard  ='compCard'
    let userAdres  ='userAdres'



    return (
        <div className={userCard}>
            <p>Картка - {id}</p>
            <h2>Ім'я - {name}</h2>
            <h3>Нікнейм - {username}</h3>
            <p>Електронна адреса - {email}</p>
            <p>Телефон - {phone}</p>

            <div className={userAdres}>
                <h3>Місце проживання</h3>
                <p>Місто - {address.city}</p>
                <p>Вулиця - {address.street}</p>
                <p>Поштова скринька - {address.zipcode}</p>
            </div>

            <div className={compCard}>
                <h3>Місце роботи</h3>
                <p>Назва компанії - {company.name}</p>
                <p>Слоган - {company.catchPhrase}</p>
                <p>bs - {company.bs}</p>

            </div>


        </div>
    )
}