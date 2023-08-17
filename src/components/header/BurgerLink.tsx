import { Link } from 'react-router-dom';

type BurgerLinkType = {
	text: string;
	link: string;
	closeMenu: () => void;
};

export default function BurgerLink({ text, link, closeMenu }: BurgerLinkType) {
	return (
		<Link to={link} className="link burger-link" onClick={closeMenu}>
			{text}
		</Link>
	);
}
