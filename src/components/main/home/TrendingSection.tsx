import products from './products';
import { ProductType } from '../../utils/types';
import Carousel from './Carousel';

export default function TrendingSection() {
	function trendingProducts(products: ProductType[]): ProductType[] {
		const sortedProducts = products.sort((a, b) => {
			const scoreA = a.rating;
			const scoreB = b.rating;
			if (scoreA > scoreB) {
				return -1;
			} else if (scoreA < scoreB) {
				return 1;
			} else return 0;
		});
		const trendingProducts = sortedProducts.slice(0, 8);
		return trendingProducts;
	}

	return (
		<section className="section trending-section">
			<h2 className="section-title">Trending now</h2>
			<Carousel items={trendingProducts(products)} />
		</section>
	);
}
