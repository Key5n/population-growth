import { Meta, StoryObj } from '@storybook/react';

import { BasicLayout } from './BasicLayout';

type T = typeof BasicLayout;
type Story = StoryObj<T>;

export default {
	title: 'Layout/Basic',
	component: BasicLayout,
} satisfies Meta<T>;

export const Default: Story = {
	args: {
		headerProps: {
			children: <div>レイアウト</div>,
		},
	},
};
