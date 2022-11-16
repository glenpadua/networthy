import styles from "app/page.module.css";
import { AssetsForm } from "app/assets/components/AssetsForm";

export default function Assets() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <AssetsForm />
      </main>
    </div>
  );
}
