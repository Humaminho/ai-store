import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import CategoriesSection from './CategoriesSection';
import BannerSection from './BannerOne';
import TrendingSection from './TrendingSection';
import Card from './Card';
import products, { Product } from './products';
import BannerTwo from './BannerTwo';

export default function Home() {
	

	return (
		<div className="home">
			<HeroSection />
			<CategoriesSection />
			<BannerSection />
			<TrendingSection />
			<BannerTwo />
			<section className="section newsletter-section">
				<h2>Join our newsletter</h2>
				<form className='newsletter-form' onSubmit={(e) => e.preventDefault()}>
					<input
						type="email"
						name="email"
						id="newsletter-email"
						placeholder="fashion@enjoyer.com..."
					/>
					<p>
						Be the first to know about our latest products,
						exclusive offers, and events
					</p>
					<button
						className="button button-full"
						onClick={(e) => e.preventDefault()}
					>
						Sign-up
					</button>
				</form>
			</section>
		</div>
	);
}
