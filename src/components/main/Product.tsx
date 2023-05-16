import { useState, useContext, useEffect } from 'react';
import Stars from './Stars';
import OrderContext from '../utils/contexts/OrderContext';
import CartContext from '../utils/contexts/CartContext';

export default function Product({ ...props }) {
	const [quantity, setQuantity] = useState(1);

	const { cart, setCart }: any = useContext(CartContext);

	useEffect(() => {
		console.table(cart);
	}, [cart]);

	function handleQuantityChange(e: any) {
		const inputVal = e.target.value;
		if (inputVal < 1000 && inputVal > -1) {
			setQuantity(parseInt(inputVal));
		}
	}

	function handleAddToCart(): void {
    const order = {
      product: {...props},
      quantity: quantity
    };
	}

	return (
		<section className="section product-section">
			<div className="img-section">
				<img src={props.img} alt={props.name} height="200px" />
			</div>
			<div className="product-content-section">
				<h3 className="product-name">{props.name}</h3>
				<h2 className="product-price">Price: ${props.price}</h2>
				<div className="product-description grid">
					<p className="grid-child">Description: </p>
					<p className="grid-child">{props.description}</p>
				</div>
				<div className="product-quantity grid">
					<p className="grid-child">Quantity: </p>
					<input
						className="grid-child"
						type="number"
						value={quantity}
						max={5}
						onChange={handleQuantityChange}
					/>
				</div>
				<div className="product-cta-buttons">
					<button
						className="button button-full add-to-cart-btn"
						onClick={handleAddToCart}
					>
						Add to Cart
					</button>
					<button className="button button-full buy-it-now-btn">
						Buy it Now
					</button>
				</div>
				<div className="return-policy">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-shield-fill-check"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
						/>
					</svg>
					<p>Money Back Guarantee</p>
				</div>
			</div>
			<div className="product-about-section">
				<h2>About this Product</h2>
				<div className="about-info">
					<div className="grid">
						<p className="grid-child">Quantity</p>
						<p className="grid-child">More than 10 available</p>
					</div>
					<div className="grid">
						<p className="grid-child">Brand</p>
						<p className="grid-child">{props.brand}</p>
					</div>
					<div className="grid">
						<p className="grid-child">Material</p>
						<p className="grid-child">{props.material}</p>
					</div>
					<div className="grid">
						<p className="grid-child">Size</p>
						<p className="grid-child">{props.size} </p>
					</div>
				</div>
			</div>
			<div className="product-reviews-section">
				<div className="reviews-top">
					<h2>Reviews {`(${props.numReviews})`}</h2>
					<a href="#">
						<p>View All</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</a>
				</div>
				<div className="rating">
					<h3>{props.rating}.0</h3>
					<Stars starNum={props.rating} />
				</div>
			</div>
		</section>
	);
}
