import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

export default {
  title: "Card",
  component: Card,
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => {
    return (
      <div className={"max-w-[800px]"}>
        <Card />
      </div>
    );
  },
};
