import React from "react";
import classNames from "classnames";

import s from "./typography.module.scss";

type TypographyProps = {
    variant?: string;
    style?: React.CSSProperties;
    color?: React.CSSProperties["color"];
    fontWeight?: React.CSSProperties["fontWeight"];
    children?: React.ReactNode;
    className?: string;
    transform?: React.CSSProperties["textTransform"] | null;
    element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span" | "p";
};

export const Typography = ({
    variant = "body1",
    style = {},
    color = "",
    fontWeight = "regular",
    children = null,
    className = "",
    element = "div",
    transform = "none",
    ...props
}: TypographyProps) => {
    const Component = element;
    const inline = { ...style };

    if (color) inline.color = color;
    if (fontWeight) inline.fontWeight = fontWeight;
    if (transform) inline.textTransform = transform;

    return (
        <Component className={classNames(s["oakame-" + variant], className)} style={inline} {...props}>
            {children}
        </Component>
    );
};
