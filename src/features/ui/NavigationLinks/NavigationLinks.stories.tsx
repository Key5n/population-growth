import { Meta, StoryObj } from '@storybook/react';

import { NavigationLinks } from './NavigationLinks.component';
import { NavigationProvider } from './NavigationProvider';

type T = typeof NavigationLinks;
type Story = StoryObj<T>;

export default {
	title: 'Component/NavigationLinks',
	component: NavigationLinks,
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
