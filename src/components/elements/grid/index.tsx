import React from "react";
import styles from "./grid.module.scss";
import classNames from "classnames";

type RowProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    align?: "start" | "center" | "end";
    justify?:
        | "left"
        | "center"
        | "right"
        | "space-between"
        | "space-around"
        | "space-evenly";
    gutter?: [number, number];
    wrap?: "wrap" | "unwrap" | "wrap-reverse";
};

type ColProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    span?: number | null;
    xs?: number | null;
    sm?: number | null;
    md?: number | null;
    lg?: number | null;
    xl?: number | null;
    xxl?: number | null;
};

export const Row = ({
    children = null,
    className = "",
    align = "start",
    justify = "left",
    style = {},
    gutter = [0, 0],
    wrap = "wrap",
    ...props
}: RowProps) => {
    const inline = { ...style };
    inline.flexWrap = wrap;
    inline.gap = gutter[0];
    inline.rowGap = gutter[1];
    inline.alignItems = align;
    inline.justifyContent = justify;

    return (
        <div
            className={classNames(styles.rowContainer, className)}
            style={inline}
            {...props}
        >
            {children}
        </div>
    );
};

export const Col = ({
    children = null,
    className = "",
    style = {},
    span = null,
    xs = null,
    sm = null,
    md = null,
    lg = null,
    xl = null,
    xxl = null,
    ...props
}: ColProps) => {
    const inline = { ...style };

    const getCol = () => {
        if (xs) return styles["col-" + xs];
        if (sm) return styles["col-" + sm];
        if (md) return styles["col-" + md];
        if (lg) return styles["col-" + lg];
        if (xl) return styles["col-" + xl];
        if (xxl) return styles["col-" + xxl];
    };

    const classes = classNames(
        styles.colContainer,
        span && styles["col-" + span],
        xxl && styles["col-xxl" + xxl],
        xl && styles["col-xl-" + xl],
        lg && styles["col-lg-" + lg],
        md && styles["col-md-" + md],
        sm && styles["col-sm-" + sm],
        xs && styles["col-xs-" + xs],
        getCol(),
        className,
    );

    return (
        <div className={classes} style={inline} {...props}>
            {children}
        </div>
    );
};
