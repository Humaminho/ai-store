import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import CategoriesSection from './CategoriesSection';
import BannerSection from './BannerOne';
import TrendingSection from './TrendingSection';
import Card from './Card';
import products, { Product } from './products';
import BannerTwo from './BannerTwo';
import Newsletter from './Newsletter';

export default function Home() {
	return (
		<div className="home">
			<HeroSection />
			<CategoriesSection />
			<BannerSection />
			<TrendingSection />
			<BannerTwo />
			<Newsletter />
		</div>
	);
}
