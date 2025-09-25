import clsx from "clsx";
import {
  IconMoreVertical,
  IconQuestion,
  IconSettings,
  IconShare,
  IconTwitter,
} from "../Icons";
import { SearchFormButtonIn } from "../SearchForm";

export const Header = () => {
  const buttonClass = "rounded-md hover:bg-gray-300 p-3 cursor-pointer";
  return (
    <header
      className={clsx(
        "grid grid-cols-[auto_1fr] items-center grid-flow-col gap-3 p-4",
      )}
    >
      <IconTwitter size={32} />
      <h1 className={clsx("font-bold text-md")}>ヘッダー</h1>
      <div className={clsx("hidden sm:block")}>
        <SearchFormButtonIn />
      </div>
      <button className={clsx(buttonClass, "hidden sm:grid")}>
        <IconShare size={18} />
      </button>
      <button className={clsx(buttonClass, "hidden sm:grid")}>
        <IconQuestion size={18} />
      </button>
      <button className={clsx(buttonClass, "hidden sm:grid")}>
        <IconSettings size={18} />
      </button>
      <button className={clsx(buttonClass)}>
        <IconMoreVertical size={18} />
      </button>
    </header>
  );
};
