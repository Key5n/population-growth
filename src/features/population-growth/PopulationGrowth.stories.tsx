import { Meta, StoryObj } from '@storybook/react';

import { BasicLayout } from '../layouts/BasicLayout';

import { PopulationGrowth } from './PopulationGrowth.page';

type T = typeof BasicLayout;
type Story = StoryObj<T>;

export default {
	title: 'Page/PopulationGrowth',
	component: () => (
		<>
			BasicLayout(
			<PopulationGrowth />)
		</>
	),
} satisfies Meta<T>;

export const Default: Story = {};
