import { Link } from 'react-router-dom';

export default function Card({ ...props }) {
	return (
		<Link
			to={'/products/' + props.id}
		>
			<li className="card">
				<div className="card-img-container">
					<img
						className="card-img"
						src={props.img}
						alt={props.name}
					/>
				</div>
				<h2 className="card-price">${props.price}</h2>
				<p className="card-title">{props.name}</p>
			</li>
		</Link>
	);
}
