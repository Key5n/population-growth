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

import styles from './styles.module.css';
import { useWindowWidth } from './useWindowDimensions';

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
	const { windowWidth } = useWindowWidth();
	const selectedPrefSources = prefSources.filter(
		(prefSource) => prefSource.isSelected
	);
	const data: GraphData = selectedPrefSources
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
	const bestWidth = windowWidth >= 900 ? 500 : windowWidth - 16;
	return (
		<LineChart
			width={bestWidth}
			height={500}
			data={d}
			className={styles.module}
		>
			<CartesianGrid strokeDasharray="2 2" />
			<XAxis dataKey="year" interval="preserveStartEnd" />
			<YAxis interval="preserveStartEnd" />
			<Legend verticalAlign="top" />
			{selectedPrefSources.map((prefSource) => (
				<Line
					dataKey={prefSource.prefName ?? 'undefined'}
					type="monotone"
					key={prefSource.prefCode}
				/>
			))}
			<Tooltip />
		</LineChart>
	);
}
