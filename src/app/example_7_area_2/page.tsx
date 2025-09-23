import clsx from "clsx";

export default function Page() {
  return (
    <div
      className={clsx(
        "grid gap-[10px]",
        "sm:grid-rows-[360px_180px] sm:grid-cols-[80px_80px_1fr]",
        "sm:[grid-template-areas:'item1_item2_item3''item4_item5_item6']",
        "grid-rows-[360px_180px_180px] grid-cols-[80px_80px]",
        "[grid-template-areas:'item1_item2''item3_item4''item5_item6']",
      )}
    >
      <div className={clsx("[grid-area:item1] bg-red-300")}>item1</div>
      <div className={clsx("[grid-area:item2] bg-orange-300")}>item3</div>
      <div className={clsx("[grid-area:item3] bg-blue-300")}>item3</div>
      <div className={clsx("[grid-area:item4] bg-green-300")}>item4</div>
      <div className={clsx("[grid-area:item5] bg-purple-300")}>item5</div>
      <div className={clsx("[grid-area:item6] bg-cyan-300")}>item6</div>
    </div>
  );
}
