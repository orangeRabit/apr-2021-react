export default function UserInfo({item}) {
    return(
        <div>
            <h2>
                {item.id} - {item.username}
            </h2>
            <p>
                Едектронна адреса - {item.email}
            </p>
            <p>
                Телефон - {item.phone}
            </p>
            <hr/>
            <h3>
                Адреса проживання
            </h3>
            <p>
               Місто - {item.address.city}
            </p>
            <p>
                Вулиця - {item.address.street}
            </p>
            <p>
               Квартира - {item.address.suite}
            </p>
            <hr/>
            <h3>
                Місце роботи
            </h3>
            <p>
                Назва компанії - {item.company.name}
            </p>
            <p>
                Слоган - {item.company.catchPhrase}
            </p>
        </div>
    )
}