import Burger from './Burger';
import Nav from './Nav';
import Cart from './Cart';
import DarkMode from './DarkMode';
import Logo from './Logo';

export default function Header() {
	return (
		<header>
      <div className="header" id="header-top">
        <Logo />
        <Nav />
        <div className="nav-right">
          <DarkMode />
          <Cart />
          <Burger />
        </div>
      </div>
    </header>
	);
}
