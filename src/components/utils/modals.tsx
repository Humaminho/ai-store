export interface Product {
	name: string;
	brand: string;
	id: number;
	category: string;
	img: string;
	link: string;
	price: number;
	rating: number;
	numReviews: number;
	description: string;
	material: string;
	size: string;
}

export interface Order {
  product: Product;
  quantity: number;
}