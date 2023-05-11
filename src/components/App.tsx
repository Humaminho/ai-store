import '../assets/scss/App.css';
import Header from './header/Header.tsx';
import Main from './main/Main.tsx';
import Footer from './footer/Footer.tsx';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (

      <Router>
        <div className="app">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
	);
}

export default App;
