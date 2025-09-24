import type { Meta } from "@storybook/react";
import { CartButton, HomeLink } from ".";

export default {
  title: "Buttons",
} as Meta;

export const CartHorizontal = () => <CartButton variant="horizontal" />;
export const CartVertical = () => <CartButton variant="vertical" />;
export const HomeHorizontal = () => <HomeLink variant="horizontal" />;
export const HomeVertical = () => <HomeLink variant="vertical" />;
