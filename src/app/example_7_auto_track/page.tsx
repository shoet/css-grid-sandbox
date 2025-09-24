/*
 * templateから溢れたアイテムは行が自動で追加される
 */
import clsx from "clsx";
import { ImageContainer } from "../_components/ImageContainer";

export default function Page() {
  return (
    <div
      className={clsx(
        "grid gap-[10px]",
        "grid-cols-[20%_20%_1fr]",
        "grid-rows-[180px_180px]",
      )}
    >
      <ImageContainer label="item1" />
      <ImageContainer label="item2" />
      <ImageContainer label="item3" />
      <ImageContainer label="item4" />
      <ImageContainer label="item5" />
      <ImageContainer label="item6" />
      <div>item7</div>
      <div className={clsx("h-[300px]")}>item8</div>
      <div>item9</div>
    </div>
  );
}
