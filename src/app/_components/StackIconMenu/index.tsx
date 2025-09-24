import clsx from "clsx";
import { IconBad, IconCopy, IconGood } from "../Icons";

type Direction = "horizontal" | "vertical";

type Props = {
  variant: Direction;
};

export const StackIconMenu = (props: Props) => {
  const { variant } = props;
  return (
    <div
      // rowで横方向にコンテナを埋めていき、colで縦方向に順にコンテナを埋めていく
      className={clsx(
        "p-2",
        "grid gap-[24px]",
        variant === "horizontal"
          ? "grid-flow-col justify-start" // horizontalでcol(列)を順番に埋めていき、必要に応じて新しい列を追加する
          : "content-start", // デフォルトではrow(行)で順番に埋めていき、必要に応じて新しい行を追加する
      )}
    >
      <IconCopy />
      <IconGood />
      <IconBad />
    </div>
  );
};
