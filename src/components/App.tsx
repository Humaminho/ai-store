import { useEffect, useState } from 'react';
import '../assets/scss/App.css';
import Header from './header/Header.tsx';
import Main from './main/Main.tsx';
import Footer from './footer/Footer.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeContext from './utils/contexts/ThemeContext.tsx';
import CartContext from './utils/contexts/CartContext.tsx';
import OrderContext from './utils/contexts/OrderContext.tsx';
import setupTheme from './utils/functions/setupTheme.tsx';

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [cart, setCart] = useState([]);
	const [order, setOrder] = useState({});

	useEffect(() => {
		setupTheme(darkMode);
	}, [darkMode]);

	return (
		<Router>
			<OrderContext.Provider value={{order, setOrder}}>
        <CartContext.Provider value={{ cart, setCart }}>
          <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <div className="app">
              <Header />
              <Main />
              <Footer />
            </div>
          </ThemeContext.Provider>
        </CartContext.Provider>
      </OrderContext.Provider>
		</Router>
	);
}

export default App;
