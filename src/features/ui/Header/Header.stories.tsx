import { Meta, StoryObj } from '@storybook/react';

import { NavigationProvider } from '../NavigationLinks/NavigationProvider';

import { Header } from './Header.component';

type T = typeof Header;
type Story = StoryObj<T>;

export default {
	title: 'Component/Header',
	component: Header,
} satisfies Meta<T>;

export const Default: Story = {
	args: {
		children: <span>タイトル</span>,
	},
	decorators: [
		(StoryComponent) => (
			<NavigationProvider>
				<StoryComponent />
			</NavigationProvider>
		),
	],
};
