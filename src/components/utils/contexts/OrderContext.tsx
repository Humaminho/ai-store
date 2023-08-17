import { createContext, useState } from 'react';
import { OrderType } from '../types';

type OrderContextProviderProps = {
	children: React.ReactNode;
};

type OrderContextType = {
	order: OrderType | object;
	setOrder: React.Dispatch<React.SetStateAction<OrderType>>;
};

export const OrderContext = createContext({} as OrderContextType);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
	const [order, setOrder] = useState<OrderType | object>({});

	return (
		<OrderContext.Provider value={{ order, setOrder }}>
			{children}
		</OrderContext.Provider>
	);
}
