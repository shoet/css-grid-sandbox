import clsx from "clsx";
import { IconHome, IconShoppingCart } from "../Icons";

export const CartButton = () => {
  return (
    <div className={clsx("grid justify-center")}>
      <IconShoppingCart size={32} />
      <span className={clsx("text-[12px]")}>カート</span>
    </div>
  );
};

export const CartButtonWithLabel = () => {
  return (
    <div
      className={clsx(
        "grid grid-cols-[auto_1fr] gap-4",
        "items-center",
        "grid-flow-col", // 横方向への自動列追加でアイコンの追加に耐える
      )}
    >
      <IconShoppingCart size={32} />
      <span className={clsx("text-[12px]")}>カートに入れる</span>
    </div>
  );
};

export const HomeButton = () => {
  return (
    <div className={clsx("grid justify-center")}>
      <IconHome size={32} />
      <span className={clsx("text-[12px]")}>ホーム</span>
    </div>
  );
};

export const HomeButtonWithLabel = () => {
  return (
    <div
      className={clsx(
        "grid grid-cols-[auto_1fr] gap-4",
        "items-center",
        "grid-flow-col",
      )}
    >
      <IconHome size={32} />
      <span className={clsx("text-[12px]")}>ホーム</span>
    </div>
  );
};
