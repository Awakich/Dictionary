import type { Meta, StoryObj } from '@storybook/react';
import Typography from '../UI/Typography/Typography';

const meta = {
    title: 'Example/Typography',
    component: Typography,
    tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
    args: {
        size: "h1",
        weight: "semibold",
    },
};

export const P: Story = {
    args: {
        size: "p",
    },
};