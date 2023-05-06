import { createContext } from 'react';

import { PrefSource } from '@/types/dataType';

export type PopulationGrowthContextType = {
	prefSources: PrefSource[];
	updatePrefSource: (prefSource: PrefSource) => void;
	updatePrefSources: (prefSources: PrefSource[]) => void;
};

export const PopulationContext =
	createContext<PopulationGrowthContextType | null>(null);
