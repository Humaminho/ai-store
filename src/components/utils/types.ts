export type ProductType = {
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
	key?: string | number;
}

export type OrderType = {
  product: ProductType;
  quantity: number;
}

export type CartType = OrderType[];