import { Link } from 'react-router-dom';

export default function HeroSection() {
	return (
		<section className="section hero-section">
			<div className="hero-text">
				<h1 className="hero-title">
					RELAXED FASHION: DISCOVER OUR LOOKS{' '}
				</h1>
				<p className="hero-description">
					Explore our collection of cozy and casual clothing for a
					comfortable and stylish look.
				</p>
				<Link to="/catalog" className="hero-cta button button-full">
					Shop Now
				</Link>
			</div>
			<div className="hero-photo-container">
				<img
					className="hero-photo"
					src="/img/car-girl-xl.jpg"
					alt="Girl besides a car"
					srcSet="/img/car-girl-s.jpg 300w,
                  /img/car-girl-m.jpg 600w,
                  /img/car-girl-l.jpg 1000w,
                  /img/car-girl-xl.jpg 2000w,"
					sizes="(max-width: 600px) 300px,
                (max-width: 1000px) 600px,
                1000px"
					width="2000"
				/>
			</div>
		</section>
	);
}
