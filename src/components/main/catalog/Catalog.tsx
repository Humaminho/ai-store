import products from '../home/products.js';
import { Product } from '../../utils/modals.js';
import Card from '../home/Card.js';

export default function Catalog() {
	return (
		<section className="catalog">
      <div className="section-header">
        <h1>Catalog</h1>
      </div>
			<ul className='product-list'>
				{products.map((prod: Product) => {
					return <Card key={prod.id} {...prod} />;
				})}
			</ul>
		</section>
	);
}
