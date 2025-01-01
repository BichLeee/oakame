import styles from "./page.module.css";
import { Banner } from "./_sections/banner";
import { Introduction } from "./_sections/introduction";
import { ListProducts } from "./_sections/listProducts";
import { HighlightKeyword } from "./_sections/highlightKeyword";
import { History } from "./_sections/history";
import { ListCategories } from "./_sections/listCategories";
import { Flex } from "@/components/elements";

export default function Home() {
    return (
        <Flex vertical={true} gap={"4rem"} className={styles.container}>
            <Banner />
            <Introduction />
            <ListProducts />
            <HighlightKeyword />
            <History />
            <ListCategories />
        </Flex>
    );
}
