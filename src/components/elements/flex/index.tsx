import React from "react";
import styles from "./flex.module.scss";
import classNames from "classnames";

type FlexProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    vertical?: boolean;
    align?: "start" | "center" | "end";
    justify?:
        | "left"
        | "center"
        | "right"
        | "space-between"
        | "space-around"
        | "space-evenly";
    wrap?: boolean;
    gap?: number;
};

export const Flex = ({
    children = null,
    className = "",
    style = {},
    vertical = false,
    align = "start",
    justify = "left",
    wrap = true,
    gap = 0,
    ...props
}: FlexProps) => {
    const inline = { ...style };
    if (vertical) inline.flexDirection = "column";
    if (!wrap) inline.flexWrap = "nowrap";
    if (gap) inline.gap = gap;
    inline.alignItems = align;
    inline.justifyContent = justify;

    return (
        <div
            className={classNames(styles.container, className)}
            style={inline}
            {...props}
        >
            {children}
        </div>
    );
};
