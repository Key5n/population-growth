import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Legend,
	YAxis,
	Tooltip,
} from 'recharts';

import { PrefSource } from '@/types/dataType';

type Props = {
	prefSources: PrefSource[];
};

type GraphData = ({
	year: number;
} & Record<string, number>)[];

function mergeObjects(array: GraphData): GraphData {
	const result: GraphData = [];

	array.forEach((obj) => {
		const obj1Index = result.findIndex((obj1) => obj1.year === obj.year);

		if (obj1Index !== -1) {
			result[obj1Index] = { ...result[obj1Index], ...obj };
		} else {
			result.push(obj);
		}
	});

	return result;
}

function sortArray(array: GraphData) {
	const result = [...array];
	result.sort((a, b) => a.year - b.year);

	return result;
}

export function LineChartGraph({ prefSources }: Props) {
	const data: GraphData = prefSources
		.map((prefSource) => {
			const boundaryYear = prefSource.boundaryYear || new Date().getFullYear();

			const targetPopulation =
				prefSource.data?.filter(
					(labeledPopulationData) => labeledPopulationData.label === '総人口'
				) || [];
			const populationData = targetPopulation.map((labeledPopulationData) => {
				const dataWithoutExpectationValues = labeledPopulationData.data.filter(
					(population) => population.year <= boundaryYear
				);
				const namedPopulation = dataWithoutExpectationValues.map((prev) => ({
					year: prev.year,
					[prefSource.prefName ?? 'why']: prev.value,
				}));
				return namedPopulation;
			});
			return [...populationData];
		})
		.flat()
		.flat();

	const da = mergeObjects(data);
	const d = sortArray(da);
	return (
		<LineChart width={600} height={500} data={d}>
			<CartesianGrid strokeDasharray="2 2" />
			<XAxis dataKey="year" interval="preserveStartEnd" />
			<YAxis interval="preserveStartEnd" />
			<Legend />
			<Line
				type="monotone"
				dataKey="北海道"
				stroke="#8884d8"
				activeDot={{ r: 8 }}
			/>
			<Line
				type="monotone"
				dataKey="青森県"
				stroke="#8884d8"
				activeDot={{ r: 8 }}
			/>
			<Tooltip />
		</LineChart>
	);
}
