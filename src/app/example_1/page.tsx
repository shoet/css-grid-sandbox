import clsx from "clsx";
import styles from "./index.module.css";

export default function Page() {
  return (
    <div className={clsx(styles.page)}>
      <header className={clsx(styles.header)}>header</header>
      <nav className={clsx(styles.navigation)}>navigation</nav>
      <div className={clsx(styles.item)}>item</div>
      <footer className={clsx(styles.footer)}>footer</footer>
    </div>
  );
}
