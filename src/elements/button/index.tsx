import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

type ButtonProps = {
    children?: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
    return (
        // <button className={styles.button}>
        //     <div className={styles.text}>{children}</div>
        // </button>
        <button className={styles.boxContainer}>
            <div className={classNames(styles.surface, styles.front)}>
                {children}
            </div>
            <div className={classNames(styles.surface, styles.bottom)}>
                {children}
            </div>
        </button>
    );
};
