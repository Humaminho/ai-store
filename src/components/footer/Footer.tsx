import { Link } from 'react-router-dom';
import GithubLink from './GithubLink';

export default function Footer() {
	return (
		<footer>
			<button
				onClick={() => {
					const top = document.getElementById('top');
					top?.scrollIntoView({ behavior: 'smooth' });
				}}
				className="button back-to-top"
			>
				Back to top
			</button>
			<div className="footer-links">
				<div className="footer-group-1">
					<Link to="about">About</Link>
					<a href="#">Store locator</a>
					<a href="#">FAQs</a>
					<a href="#">News</a>
				</div>
				<div className="footer-group-2">
					<a href="#">Careers</a>
					<Link to="about">Contact Us</Link>
				</div>
				<p className="copyright">
					&copy; 2023 Cozy Threads. All rights reserved.
				</p>
			</div>
			<GithubLink />
		</footer>
	);
}
