import { Link } from 'react-router-dom';

export default function CategoriesSection() {
	return (
		<section className="section categories-section">
      <h2>Our Selection</h2>
			<div className="categories">
				<Link to="/catalog" className="category casual">
					<img
						className="background-img"
						src="/img/casual.jpg"
						alt="casual wear"
					/>
					<h2 className="catalog-title">CASUAL WEAR</h2>
				</Link>
				<Link to="/catalog" className="category dresses">
					<img
						className="background-img"
						src="/img/dress.jpg"
						alt="casual wear"
					/>
					<h2 className="catalog-title">DRESSES</h2>
				</Link>
				<Link to="/catalog" className="category jackets">
					<img
						className="background-img"
						src="/img/jackets.jpg"
						alt="casual wear"
					/>
					<h2 className="catalog-title">OUTWEAR</h2>
				</Link>
				<Link to="/catalog" className="category accessories">
					<img
						className="background-img"
						src="/img/accessories.jpg"
						alt="casual wear"
					/>
					<h2 className="catalog-title">ACCESSORIES</h2>
				</Link>
			</div>
		</section>
	);
}
