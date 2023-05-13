import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoriesSection() {
  return (
		<section className="section categories-section">
			<div className="categories">
				<Link to="/catalogue" className="category">
					<img
						className="background-img"
						src="/src/assets/img/casual.jpg"
						alt="casual wear"
					/>
					<h2 className="catalogue-title">CASUAL WEAR</h2>
				</Link>
				<Link to="/catalogue" className="category">
					<img
						className="background-img"
						src="/src/assets/img/dress.jpg"
						alt="casual wear"
					/>
					<h2 className="catalogue-title">DRESSES</h2>
				</Link>
				<Link to="/catalogue" className="category">
					<img
						className="background-img"
						src="/src/assets/img/jackets.jpg"
						alt="casual wear"
					/>
					<h2 className="catalogue-title">OUTWEAR</h2>
				</Link>
				<Link to="/catalogue" className="category">
					<img
						className="background-img"
						src="/src/assets/img/accessories.jpg"
						alt="casual wear"
					/>
					<h2 className="catalogue-title">ACCESSORIES</h2>
				</Link>
			</div>
		</section>
  );
}
