import clsx from "clsx";
import { ImageContainer } from "../_components/ImageContainer";

export default function Page() {
  return (
    <div
      className={clsx(
        "grid gap-[10px]",
        "grid-cols-[20%_20%_auto_200px] grid-rows-[360px_180px]",
      )}
    >
      <ImageContainer label="1" />
      <ImageContainer label="2" className={clsx("col-span-2")} />
      <ImageContainer label="3" className={clsx("!w-[1600px]")} />
    </div>
  );
}
