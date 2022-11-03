import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Networthy!</h1>

        <p className={styles.description}>
          We are on a mission to kill all spreadsheets 🔪
        </p>
      </main>
    </div>
  );
}
