import styles from "./page.module.css";
import { Banner } from "./_sections/banner";
import { Header } from "./_components";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <Banner />
        </div>
    );
}
