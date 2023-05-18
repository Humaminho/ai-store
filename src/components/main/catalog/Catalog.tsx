import products from '../home/products.js';
import { Product } from '../../utils/modals.js';
import Card from '../Card.js';
import { useEffect, useState } from 'react';
import Newsletter from '../Newsletter.js';

export default function Catalog() {
	const [filteredList, setFilteredList] = useState<Product[]>([]);
	const [category, setCategory] = useState<string>('popular');

	useEffect(() => {
		filterByCategory(category);
		changeActiveSection(category);
	}, [category]);

	function filterByCategory(category: string) {
		if (category === 'popular') {
			setFilteredList(filterByPopularity());
			return;
		}
		const filtered = products.filter((prod: Product) => {
			return prod.category === category;
		});
		setFilteredList(filtered);
	}

	function changeActiveSection(category: string) {
		const filterButtons = document.querySelectorAll('.filter');
		filterButtons.forEach((btn: any) => {
			btn.classList.remove('active');
		});
		const targetSection = document.getElementById(category);
		targetSection?.classList.add('active');
    console.log(targetSection);
	}

	function filterByPopularity() {
		const filtered = products.sort((a: Product, b: Product) => {
			return b.rating - a.rating;
		});
		return filtered;
	}

	return (
		<section className="catalog">
			<div className="catalog-top">
				<div className="search-section">
					<div className="search-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-search"
							viewBox="0 0 16 16"
						>
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg>
					</div>
					<input
						className="searchbar"
						type="search"
						placeholder="Search..."
					/>
				</div>
			</div>
			<div className="filter-section">
				<button
					className="filter"
					id="popular"
					onClick={() => {
						setCategory('popular');
					}}
				>
					Popular
				</button>
				<button
					className="filter"
					id="top"
					onClick={() => {
						setCategory('top');
					}}
				>
					Tops
				</button>
				<button
					className="filter"
					id="bottom"
					onClick={() => {
						setCategory('bottom');
					}}
				>
					Bottoms
				</button>
				<button
					className="filter"
					id="outerwear"
					onClick={() => {
						setCategory('outerwear');
					}}
				>
					Jackets
				</button>
				<button
					className="filter"
					id="dresses"
					onClick={() => {
						setCategory('dresses');
					}}
				>
					Dresses
				</button>
				<button
					className="filter"
					id="accessories"
					onClick={() => {
						setCategory('accessories');
					}}
				>
					Accessories
				</button>
			</div>
			<ul className="product-list section">
				{filteredList.map((prod: Product) => {
					return <Card key={prod.id} {...prod} />;
				})}
			</ul>
			<Newsletter />
		</section>
	);
}
