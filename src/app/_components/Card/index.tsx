import clsx from "clsx";
import Image from "next/image";

export const Card = (props: { variant: "bottom" | "top" | "overlap" }) => {
  const { variant = "bottom" } = props;
  return (
    <div
      className={clsx(
        "h-[200px]",
        "rounded-xl shadow-xl overflow-hidden",
        "grid",
        variant === "bottom" &&
          "grid-cols-[8px_auto_8px_1fr] grid-rows-[1fr_8px_auto_auto_8px] [grid-template-areas:'image_image_image_image''._._._.''._avatar_._title''._avatar_._subtitle''._._._.']",
        variant === "top" &&
          "grid-cols-[8px_auto_8px_1fr] grid-rows-[8px_auto_auto_8px_1fr] [grid-template-areas:'._._._.''._avatar_._title''._avatar_._subtitle''._._._.''image_image_image_image']",
        variant === "overlap" &&
          "grid-cols-[8px_auto_8px_1fr] grid-rows-[1fr_8px_auto_auto_8px] [grid-template-areas:'._._._.''._._._.''._avatar_._title''._avatar_._subtitle''._._._.'] text-white",
      )}
    >
      <div
        className={clsx(
          "bg-blue-300 relative",
          variant === "overlap"
            ? "[grid-column:1/-1] [grid-row:1/-1] z-[-1]"
            : "[grid-area:image]",
        )}
      >
        <Image
          src={"/sunset.jpg"}
          alt="avatar"
          fill
          className={clsx("object-cover object-[0%_90%]")}
        />
      </div>
      <div
        className={clsx(
          "[grid-area:avatar]",
          "bg-blue-300 w-[50px] h-[50px] relative rounded-full overflow-hidden",
        )}
      >
        <Image
          src={"/avatar_image.png"}
          alt="avatar"
          fill
          className={clsx("object-fit object-center")}
        />
      </div>
      <div className={clsx("[grid-area:title]", "font-bold")}>title</div>
      <div className={clsx("[grid-area:subtitle]", "text-sm")}>subtitle</div>
    </div>
  );
};
