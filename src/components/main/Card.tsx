import React from 'react'

export default function Card(product:any) {
  return (
		<li className="card" key={product.id}>
			<img className="card-img" src={product.img} alt={product.name} />
			<h2 className="card-price">${product.price}</h2>
			<p className="card-title">{product.name}</p>
		</li>
  );
}
