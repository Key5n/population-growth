import { Meta, StoryObj } from '@storybook/react';

import PopulationProvider from './dataProvider';
import { PopulationGrowth } from './PopulationGrowth.page';

type T = typeof PopulationGrowth;
type Story = StoryObj<T>;

export default {
	title: 'Page/PopulationGrowth',
	component: PopulationGrowth,
} satisfies Meta<T>;

export const Default: Story = {
	decorators: [
		(StoryComponent) => (
			<PopulationProvider>
				<StoryComponent />
			</PopulationProvider>
		),
	],
};
