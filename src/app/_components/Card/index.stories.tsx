import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

export default {
  title: "Grid/Card",
  component: Card,
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
