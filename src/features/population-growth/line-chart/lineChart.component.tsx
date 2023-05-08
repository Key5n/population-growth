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

import { colors } from '@/lib/colorCodes';
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
			<XAxis
				dataKey="year"
				interval="preserveStartEnd"
				label={{ value: '年', offset: -5, position: 'insideBottomRight' }}
			/>
			<YAxis
				interval="preserveStartEnd"
				tickFormatter={(value: number) => {
					const v = value;
					return `${v.toLocaleString()}`;
				}}
				width={100}
				label={{
					value: '人口数（人）',
					angle: -90,
					position: 'insideLeft',
				}}
			/>
			<Legend verticalAlign="top" />
			{selectedPrefSources.map((prefSource, i) => (
				<Line
					dataKey={prefSource.prefName ?? 'undefined'}
					type="monotone"
					key={prefSource.prefCode}
					stroke={colors[i % colors.length]}
				/>
			))}
			<Tooltip />
		</LineChart>
	);
}
