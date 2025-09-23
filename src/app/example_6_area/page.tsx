import clsx from "clsx";
import { ImageContainer } from "../_components/ImageContainer";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.grid}>
      <div className={clsx(styles.text)}>text</div>
      <ImageContainer label="main" className={clsx(styles.main)} />
      <ImageContainer label="side" className={clsx(styles.side)} />
      <ImageContainer label="sub1" className={clsx(styles.sub1)} />
      <ImageContainer label="sub2" className={clsx(styles.sub2)} />
    </div>
  );
}
