import clsx from "clsx";
import { ImageContainer } from "../_components/ImageContainer";

export default function Page() {
  return (
    <div
      className={clsx(
        "grid gap-[18px]",
        "sm:grid-rows-[360px_180px] sm:grid-cols-[20%_20%_auto_20%]",
        "grid-rows-[360px_180px_200px] grid-cols-[20%_20%_auto]",
      )}
    >
      <div
        className={clsx(
          "bg-blue-300",
          "row-start-1 sm:row-end-2 col-start-1 col-end-2",
          "row-end-[-1]",
        )}
      >
        <ImageContainer label="1" />
      </div>
      <div
        className={clsx(
          "bg-purple-300",
          "row-start-1 row-end-2 col-start-2 col-end-4",
        )}
      >
        <ImageContainer label="2" />
      </div>
      <div
        className={clsx(
          "bg-orange-300",
          "sm:row-start-1 sm:row-end-3 sm:col-start-4 sm:col-end-5",
          "row-start-3 row-end-4 col-start-2 col-end-[-1]",
        )}
      >
        <ImageContainer label="3" />
      </div>
      <div
        className={clsx(
          "bg-yellow-300",
          "row-start-2 row-end-3 sm:col-start-1 col-end-3",
          "col-start-2",
        )}
      >
        <ImageContainer label="4" />
      </div>
      <div
        className={clsx(
          "bg-red-300",
          "row-start-2 row-end-3 col-start-3 col-end-4",
        )}
      >
        <ImageContainer label="5" />
      </div>
    </div>
  );
}
