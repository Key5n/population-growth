export type Data = {
	year: number;
	value: number;
};

export type LabeledPopulationData = {
	label: string;
	data: Data[];
};

export type BasicPrefInfo = {
	prefCode: number;
	prefName: string;
};

export type PrefSource = BasicPrefInfo & {
	boundaryYear: number | null;
	data: LabeledPopulationData[] | null;
	isSelected: boolean;
};
