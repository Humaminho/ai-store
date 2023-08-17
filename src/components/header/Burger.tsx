import BurgerLink from './BurgerLink';

export default function Burger() {
	const burgerLinksArray = [
		{
			text: 'HOME',
			link: '/',
		},
		{
			text: 'CATALOG',
			link: '/catalog',
		},
		{
			text: 'ABOUT',
			link: '/about',
		},
	];

	function openMenu(): void {
		const navList = document.querySelector('.burger-nav-container');
		navList?.classList.add('burger-nav-container-active');
		const html = document.querySelector('html');
		html?.classList.add('no-scroll');
	}

	function closeMenu(): void {
		const navList = document.querySelector('.burger-nav-container');
		navList?.classList.remove('burger-nav-container-active');
		const html = document.querySelector('html');
		html?.classList.remove('no-scroll');
	}

	return (
		<>
			<div className="burger" onClick={openMenu}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={25}
					height={25}
					fill="currentColor"
					className="bi bi-list"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
					/>
				</svg>
			</div>
			<div className="burger-nav-container">
				<nav className="burger-nav">
					<div className="burger-top">
						<svg
							onClick={closeMenu}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="2rem"
							height="2rem"
							fill="currentColor"
							className="close-burger"
						>
							<title>close</title>
							<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
						</svg>
					</div>
					<ul className="burger-nav-list">
						{burgerLinksArray.map((link) => {
							return (
								<li key={link.text}>
									<BurgerLink
										link={link.link}
										text={link.text}
										closeMenu={closeMenu}
									/>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</>
	);
}
