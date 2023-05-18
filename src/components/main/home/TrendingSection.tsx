import Card from '../Card';
import products from './products';
import { Product } from '../../utils/modals';

export default function TrendingSection() {
	function trendingProducts(products: Product[]): Product[] {
		const sortedProducts = products.sort((a, b) => {
			const scoreA = a.rating * a.numReviews;
			const scoreB = b.rating * b.numReviews;
			if (scoreA < scoreB) {
				return -1;
			} else if (scoreA > scoreB) {
				return 1;
			} else return 0;
		});
		const trendingProducts = sortedProducts.slice(0, 6);
		return trendingProducts;
	}

	return (
		<section className="section trending-section">
			<h2>Trending now</h2>
			<ul className="trending-list">
				{trendingProducts(products).map((product) => {
					return <Card key={product.id} {...product} />;
				})}
			</ul>
		</section>
	);
}
