import React from 'react';
import products, { Product } from './products.tsx';
import Card from './Card.tsx';

export default function Catalog() {

	return (
		<section className="catalog">
			<ul>
				{products.map((prod:Product) => {
					return (
						<Card key={prod.id} {...prod}/>
					);
				})}
			</ul>
		</section>
	);
}
