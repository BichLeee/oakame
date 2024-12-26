import { Button } from "elements";
import styles from "./header.module.scss";
import { IconOakame } from "components/SVGs";

export const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.icon}>
                <IconOakame />
            </div>
            <div>PRODUCT</div>
            <Button>LOOKBOOK</Button>
        </header>
    );
};
