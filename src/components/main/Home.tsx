import { Link } from 'react-router-dom'
import HeroSection from './HeroSection';
import CategoriesSection from './CategoriesSection';
import BannerSection from './BannerSection';

export default function Home() {

  return (
		<div className="home">
			<HeroSection />
			<CategoriesSection />
      <BannerSection />
			<section className="section trending-section"></section>
			<section className="section banner banner-left"></section>
			<section className="newsletter"></section>
		</div>
  );
}
