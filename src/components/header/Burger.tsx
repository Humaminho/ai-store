import React from 'react';
import { Link } from 'react-router-dom';

export default function Burger() {
	function handleBurgerClose(): void {
		const navList = document.querySelector('.burger-nav-container');
		navList?.classList.remove('burger-nav-container-active');
		const html = document.querySelector('html');
		html?.classList.remove('no-scroll');
	}

	function handleBurgerClick(): void {
		const navList = document.querySelector('.burger-nav-container');
		navList?.classList.add('burger-nav-container-active');
		const html = document.querySelector('html');
		html?.classList.add('no-scroll');
	}

	return (
		<>
			<div className="burger" onClick={handleBurgerClick}>
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
						<img
							src="/src/assets/brand/logo.svg"
							height={40}
							alt="logo"
							className="logo"
						/>
						<svg
							onClick={handleBurgerClose}
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
						<li>
							<Link
								to="/"
								className="link burger-link"
								onClick={handleBurgerClose}
							>
								HOME
							</Link>
						</li>
						<li>
							<Link
								to="/catalog"
								className="link burger-link"
								onClick={handleBurgerClose}
							>
								CATALOG
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								className="link burger-link"
								onClick={handleBurgerClose}
							>
								ABOUT
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
