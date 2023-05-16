import { Link } from "react-router-dom";
import goBackToTop from "../utils/functions/goBackToTop";

export default function Card({...props}) {
	return (
		<Link to={'/products/' + props.id} onClick={goBackToTop}>
      <li className="card">
        <img className="card-img" src={props.img} alt={props.name} />
        <h2 className="card-price">${props.price}</h2>
        <p className="card-title">{props.name}</p>
      </li>
    </Link>
	);
}
