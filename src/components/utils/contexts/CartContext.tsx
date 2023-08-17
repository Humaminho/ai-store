import { createContext, useState } from 'react';
import { CartType } from '../types';


type CartContextType = {
	cart: CartType;
	setCart: React.Dispatch<React.SetStateAction<CartType>>;
};

type CartContextProviderType = {
	children: React.ReactNode;
};

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderType) {
	const [cart, setCart] = useState<CartType>([]);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
}
