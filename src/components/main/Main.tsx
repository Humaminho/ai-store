import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import Catalogue from './Catalogue.tsx';
import About from './About.tsx';

export default function Main() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/catalogue" element={<Catalogue />}></Route>
			<Route path="/about" element={<About />}></Route>
		</Routes>
	);
}
