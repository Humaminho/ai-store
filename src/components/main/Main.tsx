import { Routes, Route } from 'react-router-dom';
import Home from './home/Home.js';
import Catalog from './catalog/Catalog.js';
import About from './about/About.js';
import ProductPage from './home/ProductPage.js';

export default function Main() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/catalog" element={<Catalog />}></Route>
			<Route path="/about" element={<About />}></Route>
			<Route path="/products/:id" element={<ProductPage />}></Route>
		</Routes>
	);
}
