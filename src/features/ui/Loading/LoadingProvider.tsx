import { ReactNode, useCallback, useMemo, useState } from 'react';

import { LoadingContext } from './LoadingContext';

type Props = {
	children: ReactNode;
};
export function LoadingProvider({ children }: Props) {
	const [isLoading, setIsLoading] = useState(true);
	const setLoadingState = useCallback((value: boolean) => {
		setIsLoading(value);
	}, []);
	const value = useMemo(
		() => ({
			isLoading,
			setLoadingState,
		}),
		[isLoading, setLoadingState]
	);
	return (
		<LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
	);
}
