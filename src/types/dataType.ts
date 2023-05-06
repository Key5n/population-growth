export interface Data {
	year: number;
	value: number;
}

export interface PopulationData {
	label: string;
	data: Data[];
}

export interface PrefSource {
	prefCode: number | null;
	prefName: string | null;
	boundaryYear: number | null;
	data: PopulationData[] | null;
}
