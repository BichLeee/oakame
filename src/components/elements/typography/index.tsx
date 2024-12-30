import React from "react";
import classNames from "classnames";

import s from "./typography.module.scss";

type TypographyProps = {
    variant?: string;
    style?: React.CSSProperties;
    color?: React.CSSProperties["color"];
    fontWeight?: "regular" | "medium" | "bold";
    children?: React.ReactNode;
    className?: string;
    element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span" | "p";
};

export const Typography = ({
    variant = "h7",
    style = {},
    color = "",
    fontWeight = "regular",
    children = null,
    className = "",
    element = "div",
    ...props
}: TypographyProps) => {
    const Component = element;
    const inline = { ...style };

    if (color) inline.color = color;

    return (
        <Component
            className={classNames(
                s["oakame-" + variant],
                s["fw-" + fontWeight],
                className,
            )}
            style={inline}
            {...props}
        >
            {children}
        </Component>
    );
};
