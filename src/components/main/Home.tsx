import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
		<div className="home">
			<div className="hero-section">
				<div className="hero-tex">
					<h1 className="hero-title">Discover Your Style</h1>
					<p className="hero-description">
						Explore our collection of cozy and casual clothing for a
						comfortable and stylish look.
					</p>
					<Link to="/catalogue" className="hero-cta button">
						Shop Now
					</Link>
				</div>
				<div className="hero-pics">
					<img
						className="long-hero-photo"
						src="src/assets/img/car-girl.jpg"
						alt=""
					/>
					<div className="short-hero-photos">
            <img
              className="short-hero-photo"
              src="src/assets/img/boy.jpg"
              alt=""
            />
            <img
              className="short-hero-photo"
               src="src/assets/img/girl.jpg"
              alt=""
            />
          </div>
				</div>
			</div>
		</div>
  );
}
