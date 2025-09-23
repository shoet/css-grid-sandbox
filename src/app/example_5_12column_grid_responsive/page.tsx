import clsx from "clsx";
import { ImageContainer } from "../_components/ImageContainer";

export default function () {
  return (
    <div
      className={clsx(
        "grid gap-[10px]",
        "grid-cols-[repeat(12,1fr)] sm:grid-rows-[360px_180px]",
        "grid-rows-[360px_180px_180px]",
      )}
    >
      <ImageContainer
        label="1"
        className={clsx("col-span-3 sm:row-span-1 row-span-full")}
      />
      <ImageContainer label="2" className={clsx("sm:col-span-6 col-span-9")} />
      <ImageContainer label="3" className={clsx("col-span-3 row-span-2")} />
      <ImageContainer label="4" className={clsx("sm:col-span-5 col-span-6")} />
      <ImageContainer label="5" className={clsx("sm:col-span-4 col-span-6")} />
    </div>
  );
}
