import { Link } from 'react-router-dom'

export default function Nav() {
  return (
		<div className="nav">
			<ul className="nav-list">
				<li>
					<Link to="/" className="nav-link">
						Home
					</Link>
				</li>
				<li>
					<Link to="/catalogue" className="nav-link">
						Catalogue
					</Link>
				</li>
				<li>
					<Link to="/about" className="nav-link">
						About
					</Link>
				</li>
			</ul>
		</div>
  );
}
