import { createContext } from 'react';

import { PrefSource } from '@/types/dataType';

export type PopulationGrowthContextType = {
	prefSources: PrefSource[];
	setPrefSource: (prefSource: PrefSource) => void;
};

export const PopulationContext =
	createContext<PopulationGrowthContextType | null>(null);
