import { Meta, StoryObj } from '@storybook/react';

import { PopulationProvider } from '../PopulationProvider';

import { ChartTypeProvider } from './chart-type-selection/ChartTypeSelectionProvider';
import { Controller } from './Controller.component';

import { prefSources } from '@/tests/valueForMocks';

type T = typeof Controller;
type Story = StoryObj<T>;

export default {
	title: 'Component/Controller',
	component: Controller,
} satisfies Meta<T>;

export const Default: Story = {
	decorators: [
		(StoryComponent) => (
			<ChartTypeProvider>
				<PopulationProvider initialValue={prefSources}>
					<StoryComponent />
				</PopulationProvider>
			</ChartTypeProvider>
		),
	],
};
