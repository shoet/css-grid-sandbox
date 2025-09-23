import clsx from "clsx";
import Image from "next/image";

const ImageContainer = (props: { label: string }) => {
  return (
    <div className={clsx("w-full h-full relative")}>
      <Image
        fill
        alt="image"
        src={"/avatar_image.png"}
        className={clsx("object-cover object-top")}
      />
      <div
        className={clsx(
          "absolute top-0 left-0",
          "w-[30px] h-[30px] bg-blue-300/50",
          "text-2xl font-bold text-white",
          "flex justify-center items-center",
        )}
      >
        {props.label}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div
      className={clsx(
        "grid gap-[18px]",
        "grid-rows-[360px_180px] grid-cols-[20%_20%_auto_20%]",
      )}
    >
      <div className={clsx("bg-blue-300")}>
        <ImageContainer label="1" />
      </div>
      <div className={clsx("bg-purple-300", "col-span-2")}>
        <ImageContainer label="2" />
      </div>
      <div className={clsx("bg-orange-300", "row-span-2")}>
        <ImageContainer label="3" />
      </div>
      <div className={clsx("bg-yellow-300", "col-span-2")}>
        <ImageContainer label="4" />
      </div>
      <div className={clsx("bg-red-300")}>
        <ImageContainer label="5" />
      </div>
    </div>
  );
}
