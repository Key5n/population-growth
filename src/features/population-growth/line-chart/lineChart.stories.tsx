import { StoryObj, Meta } from '@storybook/react';

import { LineChartGraph } from './lineChart.component';

import { prefSources } from '@/tests/valueForMocks';
import { PrefSource } from '@/types/dataType';

type T = typeof LineChartGraph;
type Story = StoryObj<T>;

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
