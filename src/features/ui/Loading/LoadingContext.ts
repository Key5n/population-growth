import { createContext } from 'react';

export type LoadingContextType = {
	isLoading: boolean;
	setLoadingState: (value: boolean) => void;
};

export const LoadingContext = createContext<LoadingContextType | null>(null);
