import clsx from "clsx";
import { IconSearch } from "../Icons";
import { useState } from "react";

export const SearchForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form
      className={clsx("grid grid-cols-[1fr_auto] items-center gap-1")}
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Search"
        type="text"
        className={clsx("p-2 border border-gray-300")}
      />
      <button
        type="submit"
        className={clsx(
          "bg-black text-white h-full aspect-square cursor-pointer",
          "flex justify-center items-center",
        )}
      >
        <IconSearch size={20} strokeWidth={3} />
      </button>
    </form>
  );
};

export const SearchFormButtonIn = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const [focus, setFocus] = useState(false);
  return (
    <form
      className={clsx(
        "grid grid-cols-[auto_1fr] items-center gap-1",
        "p-2 border border-gray-300",
        "has-focus:outline-2 has-focus:outline-sky-500",
      )}
      onSubmit={handleSubmit}
    >
      <button
        type="submit"
        className={clsx(
          "text-gray-300 h-full aspect-square cursor-pointer",
          "flex justify-center items-center",
        )}
      >
        <IconSearch size={20} strokeWidth={3} />
      </button>
      <input
        placeholder="Search"
        type="text"
        className={clsx("outline-none")}
      />
    </form>
  );
};
