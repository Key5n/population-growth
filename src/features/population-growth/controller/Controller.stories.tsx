import { Meta, StoryObj } from '@storybook/react';

import { PopulationProvider } from '../dataProvider';

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
			<PopulationProvider initialValue={prefSources}>
				<StoryComponent />
			</PopulationProvider>
		),
	],
};
