import { Link } from 'react-router-dom';

export default function BannerTwo() {
	return (
		<section className="section banner banner-left">
			<div className="banner-text">
				<h2>Worldwide Shipping Available</h2>
				<p>
					No matter where you are, we can ship our cozy clothing to
					your doorstep. Shop now and experience the luxury of our
					premium materials and unmatched quality and style.
				</p>
				<Link to="/catalog" className="button button-full banner-cta">
					Ship now
				</Link>
			</div>
			<div className="banner-img-container">
				<img
					src="/img/girl.jpg"
					alt="shirts"
					className="banner-img"
				/>
			</div>
		</section>
	);
}
