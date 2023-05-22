import { Link } from 'react-router-dom';
import GithubLink from './GithubLink';
import scrollSmoothly from '../utils/functions/scrollSmoothly';

export default function Footer() {
	return (
		<footer>
			<button onClick={scrollSmoothly} className="button back-to-top">
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
			</div>
			<p className="copyright">
				&copy; 2023 Cozy Threads. All rights reserved.
			</p>
			<GithubLink />
		</footer>
	);
}
