import clsx from "clsx";
import styles from "./index.module.css";
import { Card } from "./_components/Card";

export default function Page() {
  return (
    <div className={clsx(styles.page)}>
      <nav className={clsx(styles.nav)}>nav</nav>
      <header className={clsx(styles.header)}>header</header>
      <div className={clsx(styles.main)}>
        <div className={clsx("grid gap-4", "md:grid-cols-2 grid-cols-1")}>
          {Array.from({ length: 8 }).map(() => (
            <Card />
          ))}
        </div>
      </div>
    </div>
  );
}
