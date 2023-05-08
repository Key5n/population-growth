import { Meta, StoryObj } from '@storybook/react';

import { BasicLayout } from '../layouts/BasicLayout';
import { LoadingProvider } from '../ui/Loading/LoadingProvider';
import { NavigationProvider } from '../ui/NavigationLinks/NavigationProvider';

import { PopulationProvider } from './dataProvider';
import { PopulationGrowth } from './PopulationGrowth.page';

import { prefSources } from '@/tests/valueForMocks';

type T = typeof BasicLayout;
type Story = StoryObj<T>;

export default {
	title: 'Page/PopulationGrowth',
	component: PopulationGrowth,
} satisfies Meta<T>;

export const Default: Story = {
	decorators: [
		(StoryComponent) => (
			<LoadingProvider>
				<NavigationProvider>
					<PopulationProvider initialValue={prefSources}>
						<StoryComponent />
					</PopulationProvider>
				</NavigationProvider>
			</LoadingProvider>
		),
	],
};
