import clsx from "clsx";
import Image from "next/image";
import { ComponentProps } from "react";
export const ImageContainer = (
  props: { label: string } & ComponentProps<"div">,
) => {
  const { className, ...rest } = props;
  return (
    <div className={clsx("w-full h-full relative", className)} {...rest}>
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
