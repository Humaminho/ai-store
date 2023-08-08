import { useParams } from 'react-router-dom';
import products from './products';
import Newsletter from '../common/Newsletter';
import TrendingSection from './TrendingSection';
import Product from './Product';

function ProductPage() {
	const { id } = useParams();

	const product = products.find((product) => {
		return (product.id as number) === parseInt(id as string, 10);
	});

	return (
		<div className="page product-page">
			<Product {...product} />
			<TrendingSection />
			<Newsletter />
		</div>
	);
}

export default ProductPage;
