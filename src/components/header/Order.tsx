import { useContext } from 'react';
import CartContext from '../utils/contexts/CartContext';

export default function Order({ ...props }) {
	const { cart, setCart }: any = useContext(CartContext);

	function handleMinusBtnClick() {
		setCart(
			cart.map((order: any) => {
				if (
					order.product.id === props.product.id &&
					order.quantity > 1
				) {
					return { ...order, quantity: quantity - 1 };
				} else return order;
			})
		);
	}

	function handlePlusBtnClick() {
		setCart(
			cart.map((order: any) => {
				if (order.product.id === props.product.id) {
					return { ...order, quantity: quantity + 1 };
				} else return order;
			})
		);
	}

	function handleRemoveOrder() {
		setCart(
			cart.filter(
				(order: any) => !(order.product.id === props.product.id)
			)
		);
	}

	const product = props.product;
	const quantity = props.quantity;

	return (
		<div className="order-container">
			<div className="order-img-container">
				<img src={product.img} alt={product.name} width="50%" />
			</div>
			<div className="order-content">
				<div className="order-name">{product.name}</div>
				<div className="order-quantity-section">
					<div className="order-quantity">
						<button onClick={handleMinusBtnClick}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="currentColor"
								className="bi bi-file-minus-fill minus-one"
								viewBox="0 0 16 16"
							>
								<path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z" />
							</svg>
						</button>
						<div className='quantity'>
              {props.quantity}
            </div>
						<button onClick={handlePlusBtnClick}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="currentColor"
								className="bi bi-file-plus-fill plus-one"
								viewBox="0 0 16 16"
							>
								<path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
							</svg>
						</button>
					</div>
					<h3 className="order-price">
						${(product.price * quantity).toFixed(2)}
					</h3>
				</div>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="18px"
				height="18px"
				fill="currentColor"
				className="remove-order"
				onClick={handleRemoveOrder}
			>
				<title>remove order</title>
				<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
			</svg>
		</div>
	);
}
