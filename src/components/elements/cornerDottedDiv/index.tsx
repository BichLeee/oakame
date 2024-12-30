import React from "react";
import styles from "./cornerDottedDiv.module.scss";

type CornerDottedDivProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
};

export const CornerDottedDiv = ({
    children = null,
    style = {},
    ...props
}: CornerDottedDivProps) => {
    return (
        <div className={styles.container} style={style} {...props}>
            {children}
            <span className={styles.dotTopLeft}></span>
            <span className={styles.dotTopRight}></span>
            <span className={styles.dotBottomLeft}></span>
            <span className={styles.dotBottomRight}></span>
        </div>
    );
};
