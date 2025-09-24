import type { Meta, StoryObj } from "@storybook/react";
import {
  CartButton,
  CartButtonWithLabel,
  HomeButton,
  HomeButtonWithLabel,
} from ".";

export default {
  title: "Buttons",
} as Meta;

export const Cart = () => <CartButton />;
export const Home = () => <HomeButton />;
export const CartWithLabel = () => <CartButtonWithLabel />;
export const HomeWithLabel = () => <HomeButtonWithLabel />;
