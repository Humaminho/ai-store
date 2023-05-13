import React from 'react';
import products from './products.tsx';
import Card from './Card.tsx';

export default function Catalog() {

	return (
		<section className="catalog">
			<ul>
				{products.map((product) => {
					return (
						<Card product={product} />
					);
				})}
			</ul>
		</section>
	);
}
