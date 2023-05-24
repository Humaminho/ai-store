import HeroSection from './HeroSection';
import CategoriesSection from './CategoriesSection';
import BannerSection from './BannerOne';
import TrendingSection from './TrendingSection';
import BannerTwo from './BannerTwo';
import Newsletter from '../Newsletter';

export default function Home() {
	return (
		<div className="home page">
			<HeroSection />
			<CategoriesSection />
			<BannerSection />
			<TrendingSection />
			<BannerTwo />
			<Newsletter />
		</div>
	);
}
