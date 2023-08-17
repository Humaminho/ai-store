import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../utils/contexts/CartContext';
import Order from './Order';

export default function Cart() {
	const [total, setTotal] = useState(0);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const cartContext = useContext(CartContext);

	function handleGoShoppingBtnClick(): void {
		handleBurgerClose();
	}

	useEffect(() => {
		let cartTotal = 0;
		for (let i = 0; i < cartContext.cart.length; i++) {
			cartTotal += cartContext.cart[i].product.price * cartContext.cart[i].quantity;
		}
		setTotal(cartTotal);
	}, [cartContext.cart]);

	function handleCartBtnClick() {
		setIsCartOpen(true);
		const cartContainer = document.querySelector('.cart-container');
		cartContainer?.classList.add('cart-container-active');
		const html = document.querySelector('html');
		html?.classList.add('no-scroll');
	}

	function handleBurgerClose() {
		setIsCartOpen(false);
		const cartContainer = document.querySelector('.cart-container');
		cartContainer?.classList.remove('cart-container-active');
		const html = document.querySelector('html');
		html?.classList.remove('no-scroll');
	}

	function handleCheckout() {
		cartContext.setCart([]);
	}

	return (
		<>
			{isCartOpen && (
				<div className="blur-layer" onClick={handleBurgerClose}></div>
			)}
			<div onClick={handleCartBtnClick} className="cart-button">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={25}
					height={25}
					fill="currentColor"
					className="bi bi-cart3"
					viewBox="0 0 16 16"
				>
					<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
				</svg>
				{cartContext.cart.length ? (
					<div className="number-of-orders">
						{cartContext.cart.length}
					</div>
				) : (
					''
				)}
			</div>
			<div className="cart-container">
				<div className="cart">
					<div className="cart-top">
						<h2 className="cart-title">
							Your shopping cart ({cartContext.cart.length})
						</h2>
						<svg
							onClick={handleBurgerClose}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="2rem"
							height="2rem"
							fill="currentColor"
							className="close-cart"
						>
							<title>close</title>
							<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
						</svg>
					</div>
					<div className="cart-section">
						{cartContext.cart.length !== 0 ? (
							<div className="full-cart">
								<div className="cart-items">
									{cartContext.cart.map(
										(order) => (
											<Order
												{...order}
												key={order.product.id}
											/>
										)
									)}
								</div>
								<div className="checkout-section">
									<div className="total-bill">
										Total ${total.toFixed(2)}
									</div>
									<button
										className="checkout-btn button button-full"
										onClick={handleCheckout}
									>
										Checkout
									</button>
								</div>
							</div>
						) : (
							<div className="empty-cart-container">
								<div className="empty-cart">
									<img
										src="/img/empty-cart.png"
										alt="Empty cart"
										className="empty-cart-illustration"
									/>
									<h2>Your cart is empty</h2>
									<Link
										to="/catalog"
										className="button button-full"
										onClick={handleGoShoppingBtnClick}
									>
										Go shopping
									</Link>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
