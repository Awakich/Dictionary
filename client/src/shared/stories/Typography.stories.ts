import type { Meta, StoryObj } from '@storybook/react';
import Typography from '../UI/Typography/Typography';

const meta = {
    title: 'Example/Button',
    component: Typography,
    tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
    args: {
        size: "Text",
        weight: "normal"
    },
};