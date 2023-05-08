import { Meta, StoryObj } from '@storybook/react';

import { Loading } from './Loading.component';
import { LoadingProvider } from './LoadingProvider';

type T = typeof Loading;
type Story = StoryObj<T>;

export default {
	title: 'Component/Loading',
	component: Loading,
} satisfies Meta<T>;

export const Default: Story = {
	decorators: [
		(StoryComponent) => (
			<LoadingProvider>
				<StoryComponent />
			</LoadingProvider>
		),
	],
};
