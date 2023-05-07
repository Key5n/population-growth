import { StoryObj, Meta } from '@storybook/react';

import { LineChartGraph } from './lineChart.component';

import { PrefSource } from '@/types/dataType';

type T = typeof LineChartGraph;
type Story = StoryObj<T>;

const prefSources: PrefSource[] = [
	{
		boundaryYear: 2020,
		prefCode: 1,
		prefName: '北海道',
		data: [
			{
				label: '総人口',
				data: [
					{
						year: 1985,
						value: 100,
					},
					{
						year: 1990,
						value: 120,
					},
					{
						year: 1995,
						value: 130,
					},
				],
			},
			{
				label: '生産人口',
				data: [
					{
						year: 1990,
						value: 60,
					},
					{
						year: 1995,
						value: 70,
					},
				],
			},
		],
		isSelected: true,
	},
	{
		boundaryYear: 2020,
		prefCode: 2,
		prefName: '青森県',
		data: [
			{
				label: '総人口',
				data: [
					{
						year: 1990,
						value: 50,
					},
					{
						year: 1995,
						value: 60,
					},
					{
						year: 2000,
						value: 80,
					},
				],
			},
			{
				label: '生産人口',
				data: [
					{
						year: 1990,
						value: 20,
					},
					{
						year: 1995,
						value: 30,
					},
				],
			},
		],
		isSelected: true,
	},
];

const nullPrefSources: PrefSource[] = [
	{
		boundaryYear: null,
		prefCode: null,
		prefName: null,
		data: null,
		isSelected: false,
	},
];

export default {
	title: 'Component/graph',
	component: LineChartGraph,
} satisfies Meta<T>;

export const Default: Story = {
	args: {
		prefSources,
	},
};

export const IfNoData: Story = {
	args: {
		prefSources: nullPrefSources,
	},
};
