import styles from "./page.module.css";
import {
    Banner,
    Introduction,
    ListProducts,
    HighlightKeyword,
    History,
    ListCategories,
    Footer,
} from "./_sections";
import { Flex } from "@/components/elements";

export default function Home() {
    return (
        <Flex
            vertical={true}
            gap="4rem"
            wrap="nowrap"
            className={styles.container}
        >
            <Banner />
            <Introduction />
            <ListProducts />
            <HighlightKeyword />
            <History />
            <ListCategories />
            <Footer />
        </Flex>
    );
}
