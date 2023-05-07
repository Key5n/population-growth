import { ReactNode, useCallback, useMemo, useState } from 'react';

import { NavigationContext } from './NavigationContext';

type Props = {
	children: ReactNode;
};
export function NavigationProvider({ children }: Props) {
	const [isNavigationOpen, setIsNavigationOpen] = useState(false);
	const toggleNavigationState = useCallback(() => {
		setIsNavigationOpen(!isNavigationOpen);
	}, [isNavigationOpen]);
	const value = useMemo(
		() => ({
			isNavigationOpen,
			toggleNavigationState,
		}),
		[isNavigationOpen, toggleNavigationState]
	);
	return (
		<NavigationContext.Provider value={value}>
			{children}
		</NavigationContext.Provider>
	);
}
