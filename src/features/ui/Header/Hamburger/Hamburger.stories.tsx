import { Meta, StoryObj } from '@storybook/react';

import { NavigationProvider } from '../../NavigationLinks/NavigationProvider';

import { Hamburger } from './Hamburger.component';

type T = typeof Hamburger;
type Story = StoryObj<T>;

export default {
	title: 'Component/Hamburger',
	component: Hamburger,
} satisfies Meta<T>;

export const Default: Story = {
	decorators: [
		(StoryComponent) => (
			<NavigationProvider>
				<StoryComponent />
			</NavigationProvider>
		),
	],
};
