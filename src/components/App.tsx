import { useEffect, useState } from 'react';
import '../styles/App.css';
import Header from './header/Header.tsx';
import Main from './main/Main.tsx';
import Footer from './footer/Footer.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContext } from './utils/contexts/ThemeContext.tsx';
import { OrderContextProvider } from './utils/contexts/OrderContext.tsx';
import setupTheme from './utils/functions/setupTheme.ts';
import {  CartContextProvider } from './utils/contexts/CartContext.tsx';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  
	useEffect(() => {
		setupTheme(darkMode)
	}, [darkMode]);

	return (
		<Router>
			<OrderContextProvider>
				<CartContextProvider>
					<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
						<div className="app">
							<Header />
							<Main />
							<Footer />
						</div>
					</ThemeContext.Provider>
				</CartContextProvider>
			</OrderContextProvider>
		</Router>
	);
}

export default App;
