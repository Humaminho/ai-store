import React, { useEffect } from 'react';

export default function Order({ ...props }) {

  useEffect(() => {
    console.log(props);
  }, []);

  const product = props.product;
  const quantity = props.quantity;

	return (
    <div className="order-container">
      <div className="order-img">
        <img src={product.img} alt={product.name} width='50%' />
      </div>
      <div className="order-content">
        <div className="order-name">
          {product.name}
        </div>
        <div className="order-quantity-section">
          <div className="order-quantity">
            PLUS OR MINUS
          </div>
          <div className="order-price">
            ${product.price * quantity}
          </div>
        </div>
      </div>
      <div className="remove-order">X</div>
    </div>
  )
}
