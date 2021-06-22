import './Menu.css';

export default function Menu(props) {
let {pages} = props;

    return (
        <div>
            <ul>
                {
                    pages.map((page, index) => <li key={index}><a href="#">{page}</a></li>)
                }
            </ul>
        </div>
    );
}