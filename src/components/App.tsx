import React, { useState} from 'react';
import '../assets/scss/App.css';
import Header from './header/Header.tsx';
import Main from './main/Main.tsx';
import Footer from './footer/Footer.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeContext from './utils/theme/ThemeContext.tsx';

function App() {

  const [darkMode, setDarkMode] = useState(true);
	return (
      <Router>
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
          <div className="app">
            <Header />
            <Main />
            <Footer />
          </div>
        </ThemeContext.Provider>
      </Router>
	);
}

export default App;
