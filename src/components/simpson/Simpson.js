import './Simpson.css';

export default function Simpson({item: {name, surname, age, info, photo}}) {

	// let {item} = props;
	// let {name, surname, age, photo, info} = item;

	// let {item:{name,surname,age,info,photo}} = props;

	let c1 = 'target';
	let c2 = 'point';
	let clsList = ['jack', 'black', 'door'];


	return (
		<div className={c1 + ' ' + c2}>
			<h2 className={clsList.join(' ')}>{name} {surname}, age - {age} </h2>
			<img src={photo}
				 alt=""/>
			<div> {info}</div>
		</div>
	);
}
