import styles from "./page.module.css";
import { LandingPage } from "components/LandingPage";
import { GetNotifiedCta } from "components/GetNotifiedCta";
import { GetStartedCta } from "components/GetStartedCta";

const isLaunched = process.env.NODE_ENV === "development";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {isLaunched ? (
          <LandingPage
            heading="Welcome to Networthy! 🤑"
            subHeading="You work 1/3rd of your life for money. Let's find out how much that's worth."
            cta={<GetStartedCta />}
          />
        ) : (
          <LandingPage
            heading="Welcome to Networthy! 🤑"
            subHeading="You work 1/3rd of your life for money. Find out how much that's worth."
            cta={<GetNotifiedCta />}
          />
        )}
      </main>
    </div>
  );
}
