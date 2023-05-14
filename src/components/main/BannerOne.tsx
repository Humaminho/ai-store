import React from 'react';
import { Link } from 'react-router-dom';

export default function BannerOne() {
	return (
		<section className="section banner banner-right">
			<div className="banner-text">
				<h2>Get Cozy with Cozy Threads</h2>
				<p>
					Discover the luxury of our cozy clothing. Made with premium
					materials for superior comfort, our products offer unmatched
					quality and style.
				</p>
				<Link to="/catalogue" className="button button-full banner-cta">
					Shop Now
				</Link>
			</div>
			<img
				src="/src/assets/img/shirts.jpg"
				alt="shirts"
				className="banner-img"
			/>
		</section>
	);
}
