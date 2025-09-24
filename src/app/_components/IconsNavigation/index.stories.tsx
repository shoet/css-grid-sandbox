import type { Meta, StoryObj } from "@storybook/react";
import { IconsNavigation, IconsNavigationHorizontal } from ".";

export default {
  title: "IconsNavigation",
  component: IconsNavigation,
} as Meta<typeof IconsNavigation>;

type Story = StoryObj<typeof IconsNavigation>;

export const VerticalInVertical: Story = {
  args: {
    variant: "vertical",
  },
};

export const Horizontal = () => <IconsNavigationHorizontal />;
