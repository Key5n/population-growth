import { createContext } from 'react';

export const chartTypeArray = [
	'総人口',
	'年少人口',
	'生産年齢人口',
	'老年人口',
] as const;
export type ChartType = (typeof chartTypeArray)[number];
export function isChartType(name: string): name is ChartType {
	return chartTypeArray.some((value) => value === name);
}
export type ChartTypeContextType = {
	chartType: ChartType;
	updateChartType: (value: ChartType) => void;
};

export const ChartTypeContext = createContext<ChartTypeContextType | null>(
	null
);
