import { ReactNode, useCallback, useMemo, useState } from 'react';

import { PopulationContext } from './dataContext';

import { PrefSource } from '@/types/dataType';

type Props = {
	children: ReactNode;
};

export default function PopulationProvider({ children }: Props) {
	const [prefSources, setPrefSources] = useState<PrefSource[]>([]);
	const updatePrefSource = useCallback(
		(newPrefSource: PrefSource) => {
			setPrefSources(
				prefSources.map((oldPrefSource) =>
					newPrefSource.prefCode === oldPrefSource.prefCode
						? newPrefSource
						: oldPrefSource
				)
			);
		},
		[prefSources]
	);
	const updatePrefSources = useCallback((newPrefSources: PrefSource[]) => {
		setPrefSources(newPrefSources);
	}, []);
	const value = useMemo(
		() => ({ prefSources, updatePrefSource, updatePrefSources }),
		[prefSources, updatePrefSource, updatePrefSources]
	);
	return (
		<PopulationContext.Provider value={value}>
			{children}
		</PopulationContext.Provider>
	);
}
