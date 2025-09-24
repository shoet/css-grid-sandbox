import type { Meta, StoryObj } from "@storybook/react";
import { StackMenu } from ".";

export default {
  title: "StackMenu",
  component: StackMenu,
} as Meta<typeof StackMenu>;

type Story = StoryObj<typeof StackMenu>;

export const Horizontal: Story = {
  args: {
    variant: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    variant: "vertical",
  },
};
