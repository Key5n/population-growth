import { BasicPrefInfo, LabeledPopulationData } from './dataType';

export type BasicPrefInfoAPIResponse = {
	message: string | null;
	result: BasicPrefInfo[];
};

export type PopulationPrefAPIResponse = {
	message: string | null;
	result: {
		boundaryYear: number;
		data: LabeledPopulationData[];
	};
};
