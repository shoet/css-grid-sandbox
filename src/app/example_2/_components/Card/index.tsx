import clsx from "clsx";
import Image from "next/image";

const AvatarImage = () => {
  return (
    <div
      className={clsx(
        "relative h-[80px] w-[80px] rounded-full overflow-hidden",
      )}
    >
      <Image
        src={"/avatar_image.png"}
        fill
        alt="avatar_image"
        className={clsx("object-cover object-center")}
      />
    </div>
  );
};

const Button = () => {
  return (
    <button
      className={clsx(
        "px-2 py-2 bg-blue-500 text-white font-bold text-base rounded-md w-full",
      )}
    >
      Button
    </button>
  );
};

export const Card = () => {
  return (
    <div
      className={clsx(
        "w-full border border-gray-300 rounded-xl px-4 py-2",
        "grid gap-[20px] sm:grid-cols-[80px_1fr_80px] grid-cols-[80px_1fr]",
      )}
    >
      <div
        className={clsx(
          "row-span-2 sm:row-span-1",
          "flex justify-center items-start",
          "bg-blue-300",
        )}
      >
        <AvatarImage />
      </div>
      <div className={clsx("content-center break-words min-w-0")}>
        {"title".repeat(3)}
      </div>
      <div
        className={clsx(
          "content-center",
          // "bg-green-300",
        )}
      >
        <Button />
      </div>
    </div>
  );
};
