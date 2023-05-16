import { Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import Catalog from './Catalog.tsx';
import About from './About.tsx';
import ProductPage from './ProductPage.tsx';

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
