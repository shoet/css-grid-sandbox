import type { Meta, StoryObj } from "@storybook/react";
import { StackIconMenu } from ".";

export default {
  title: "StackIconMenu",
  component: StackIconMenu,
} as Meta<typeof StackIconMenu>;

type Story = StoryObj<typeof StackIconMenu>;

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
