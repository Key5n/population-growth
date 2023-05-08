import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox.component';

type T = typeof Checkbox;
type Story = StoryObj<T>;

export default {
	title: 'Component/Checkbox',
	component: Checkbox,
} satisfies Meta<T>;

export const Default: Story = {
	args: {
		children: 'チェックボックス',
	},
};
