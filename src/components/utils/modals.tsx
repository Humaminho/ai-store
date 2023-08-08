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
	[key: string]: string | number;
}

export interface Order {
  product: Product;
  quantity: number;
}