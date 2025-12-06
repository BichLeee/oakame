import { Button } from "components/elements";
import { IconOakame, IconOakameMobile } from "components/SVGs";

import styles from "./header.module.scss";
import classNames from "classnames";

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.container}>
                <div className={styles.iconWrapper}>
                    <IconOakame className={styles.icon} />
                    <IconOakameMobile className={styles.iconMobile} />
                </div>

                <div className={styles.dropdownWrapper}>
                    <Button style={{ border: "none" }} size="auto" className={styles.productBtn}>
                        Product
                    </Button>
                    <Button className={classNames(styles.borderRight, styles.menuMobile)} size="auto">
                        Menu
                    </Button>
                </div>
                <div className={styles.buttonGroup}>
                    <Button className={styles.borderLeft} size="auto">
                        LOOKBOOK
                    </Button>
                    <Button className={styles.borderLeft} size="auto">
                        PRO
                    </Button>
                    <Button className={styles.borderLeft} size="auto">
                        SIGN IN
                    </Button>
                    <Button className={styles.borderLeft} size="auto">
                        CART
                    </Button>
                    <Button className={styles.borderLeft} size="auto">
                        EN
                    </Button>
                </div>
            </header>
        </div>
    );
};
