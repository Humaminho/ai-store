import products from './products.tsx';
import { Product } from '../utils/modals.tsx';
import Card from './Card.tsx';

export default function Catalog() {
	return (
		<section className="catalog">
			<ul>
				{products.map((prod: Product) => {
					return <Card key={prod.id} {...prod} />;
				})}
			</ul>
		</section>
	);
}
