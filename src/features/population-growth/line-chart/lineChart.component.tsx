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
import { useLineChart } from './useLineChart';

import { PrefSource } from '@/types/dataType';

type Props = {
	prefSources: PrefSource[];
};

export function LineChartGraph({ prefSources }: Props) {
	const { bestWidth, selectedPrefSources, formattedData } =
		useLineChart(prefSources);
	return (
		<LineChart
			width={bestWidth}
			height={500}
			data={formattedData}
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
