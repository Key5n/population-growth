import { Meta, StoryObj } from '@storybook/react';

import { ChartTypeSelection } from './ChartTypeSelection.component';
import { ChartTypeProvider } from './ChartTypeSelectionProvider';

type T = typeof ChartTypeSelection;
type Story = StoryObj<T>;

export default {
	title: 'Component/ChartTypeSelection',
	component: ChartTypeSelection,
} satisfies Meta<T>;

export const Default: Story = {
	decorators: [
		(StoryComponent) => (
			<ChartTypeProvider>
				<StoryComponent />
			</ChartTypeProvider>
		),
	],
};
