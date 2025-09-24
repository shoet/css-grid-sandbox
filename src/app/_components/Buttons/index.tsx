import clsx from "clsx";
import { IconHome, IconShoppingCart } from "../Icons";
import Link from "next/link";

type Variant = "horizontal" | "vertical";

export const CartButton = (props: { variant?: Variant }) => {
  const { variant = "horizontal" } = props;
  return (
    <button
      className={clsx(
        variant === "horizontal"
          ? "grid grid-cols-[auto_1fr] gap-4 items-center grid-flow-col"
          : "grid justify-items-center",
      )}
    >
      <IconShoppingCart size={variant === "horizontal" ? 16 : 32} />
      <span className={clsx("text-[12px]")}>
        {variant === "horizontal" ? "カートに入れる" : "カート"}
      </span>
    </button>
  );
};

export const HomeLink = (props: { variant?: Variant }) => {
  const { variant = "horizontal" } = props;
  return (
    <button
      className={clsx(
        variant === "horizontal"
          ? "grid grid-cols-[auto_1fr] gap-4 items-center grid-flow-col"
          : "grid justify-items-center",
      )}
    >
      <IconHome size={variant === "horizontal" ? 16 : 32} />
      <span className={clsx("text-[12px]")}>ホーム</span>
    </button>
  );
};
