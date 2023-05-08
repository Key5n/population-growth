import { createContext } from 'react';

export type NavigationContextType = {
	isNavigationOpen: boolean;
	toggleNavigationState: () => void;
};

export const NavigationContext = createContext<NavigationContextType | null>(
	null
);
