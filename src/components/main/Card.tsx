

export default function Card({...props}) {
	return (
		<li className="card">
			<img className="card-img" src={props.img} alt={props.name} />
			<h2 className="card-price">${props.price}</h2>
			<p className="card-title">{props.name}</p>
		</li>
	);
}
