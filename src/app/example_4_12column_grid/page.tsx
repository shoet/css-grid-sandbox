import clsx from "clsx";
import { ImageContainer } from "../_components/ImageContainer";

export default function Page() {
  return (
    <div
      className={clsx(
        "grid gap-[10px]",
        "grid-cols-[repeat(12,1fr)] grid-rows-[360px_180px]",
      )}
    >
      <ImageContainer label="1" className={clsx("col-span-3")} />
      <ImageContainer label="2" className={clsx("col-span-6")} />
      <ImageContainer
        label="3"
        className={clsx("col-[1/span_3] row-[1/span_2]")} // 1 / span 3 で1から開始でトラック3つぶん
      />
      <ImageContainer label="4" className={clsx("col-span-5")} />
      <ImageContainer label="5" className={clsx("col-span-4")} />
    </div>
  );
}
