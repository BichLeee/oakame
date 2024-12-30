import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

type ButtonProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    size?: "large" | "middle" | "small" | "auto";
    className?: string;
};

export const Button = ({
    children = null,
    className = "",
    style = {},
    size = "middle",
    ...props
}: ButtonProps) => {
    return (
        <button
            className={classNames(
                styles.boxContainer,
                className,
                styles["btn-size-" + size],
            )}
            style={style}
            {...props}
        >
            <div className={(styles.surface, styles.frontText)}>{children}</div>
            <div className={(styles.surface, styles.bottom)}></div>
            <div className={(styles.surface, styles.bottomText)}>
                {children}
            </div>
        </button>
    );
};
