import React from "react";
import styles from "./cornerDottedDiv.module.scss";
import classNames from "classnames";

type CornerDottedDivProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    topLeft?: boolean;
    topRight?: boolean;
    bottomLeft?: boolean;
    bottomRight?: boolean;
    hover?: boolean;
};

export const CornerDottedDiv = ({
    children = null,
    style = {},
    className = "",
    topLeft = true,
    topRight = true,
    bottomLeft = true,
    bottomRight = true,
    hover = false,
    ...props
}: CornerDottedDivProps) => {
    return (
        <div
            className={classNames(styles.container, className)}
            style={style}
            {...props}
        >
            {children}
            {topLeft && (
                <span
                    className={classNames(
                        styles.dotTopLeft,
                        hover && styles.hover,
                    )}
                />
            )}
            {topRight && (
                <span
                    className={classNames(
                        styles.dotTopRight,
                        hover && styles.hover,
                    )}
                />
            )}
            {bottomLeft && (
                <span
                    className={classNames(
                        styles.dotBottomLeft,
                        hover && styles.hover,
                    )}
                />
            )}
            {bottomRight && (
                <span
                    className={classNames(
                        styles.dotBottomRight,
                        hover && styles.hover,
                    )}
                />
            )}
        </div>
    );
};
