import clsx from "clsx";
import { ImageContainer } from "../ImageContainer";

export const MainSection = (props: {
  variant: "horizontal" | "vertical" | "overlap" | "bottom-left";
}) => {
  return (
    <div
      className={clsx(
        "grid gap-y-6",
        props.variant === "vertical" &&
          "grid-rows-[repeat(4,auto)_480px] [grid-template-areas:'heading''text''button''.''image'] gap-y-6 justify-items-center text-center",
        props.variant === "horizontal" &&
          "gap-x-[20px] [grid-template-areas:'._image''heading_image''text_image''button_image''._image'] grid-rows-[96px_auto_auto_auto_96px] grid-cols-[3fr_4fr] justify-items-start",
        props.variant === "overlap" &&
          "grid-rows-[96px_auto_auto_auto_96px] grid-cols-[40px_auto_40px] [grid-template-areas:'._._.''._heading_.''._text_.''._button_.''._._.'] justify-items-center text-white",
        props.variant === "bottom-left" &&
          "grid-rows-[140px_auto_auto_auto_40px] grid-cols-[40px_auto_40px] [grid-template-areas:'._._.''._heading_.''._text_.''._button_.''._._.'] justify-items-start text-white",
      )}
    >
      <h1 className={clsx("[grid-area:heading]", "text-lg font-bold")}>
        データを活用してプランを作ろう
      </h1>
      <p className={clsx("[grid-area:text]", "text-sm")}>
        日々の活動データとグローバルに集積されたデータを元に
        <br />
        効果的に目標達成できるプランを作成
      </p>
      <button
        className={clsx(
          "[grid-area:button]",
          "bg-yellow-300 font-bold text-sm px-4 py-2 cursor-pointer hover:bg-yellow-400 text-black",
        )}
      >
        無料で始める
      </button>
      <ImageContainer
        className={clsx(
          ["overlap", "bottom-left"].includes(props.variant)
            ? "[grid-column:1/-1] [grid-row:1/-1] z-[-1] brightness-50"
            : "[grid-area:image]",
        )}
        label="image"
      />
    </div>
  );
};
