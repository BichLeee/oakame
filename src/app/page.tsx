import styles from "./page.module.css";
import { Banner } from "./_sections/banner";
import { Typography } from "@/components/elements/typography";
import { Introduction } from "./_sections/introduction";
import { ListProducts } from "./_sections/listProducts";
import { HighlightKeyword } from "./_sections/highlightKeyword";
import { History } from "./_sections/history";
import { ListCategories } from "./_sections/listCategories";

export default function Home() {
    return (
        <section className={styles.container}>
            <Banner />
            <Introduction />
            <ListProducts />
            <HighlightKeyword />
            <History />
            <ListCategories />
        </section>
    );
}
