import { createContext } from 'react';

type ThemeContextType = {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext({} as ThemeContextType);
