import { Link } from 'react-router-dom';

export default function CategoriesSection() {
	return (
		<section className="section categories-section">
			<div className="categories">
				<Link to="/catalog" className="category">
					<img
						className="background-img"
						src="/src/assets/img/casual.jpg"
						alt="casual wear"
					/>
					<h2 className="catalog-title">CASUAL WEAR</h2>
				</Link>
				<Link to="/catalog" className="category">
					<img
						className="background-img"
						src="/src/assets/img/dress.jpg"
						alt="casual wear"
					/>
					<h2 className="catalog-title">DRESSES</h2>
				</Link>
				<Link to="/catalog" className="category">
					<img
						className="background-img"
						src="/src/assets/img/jackets.jpg"
						alt="casual wear"
					/>
					<h2 className="catalog-title">OUTWEAR</h2>
				</Link>
				<Link to="/catalog" className="category">
					<img
						className="background-img"
						src="/src/assets/img/accessories.jpg"
						alt="casual wear"
					/>
					<h2 className="catalog-title">ACCESSORIES</h2>
				</Link>
			</div>
		</section>
	);
}
