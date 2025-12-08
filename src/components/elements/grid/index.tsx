import React from "react";
import styles from "./grid.module.scss";
import classNames from "classnames";

type RowProps = React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    align?: React.CSSProperties["alignContent"] | null;
    justify?: React.CSSProperties["justifyContent"] | null;
    gutter?: [number, number] | null;
    wrap?: React.CSSProperties["flexWrap"] | null;
};

type ColProps = React.HTMLAttributes<HTMLElement> & {
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
    align = null,
    justify = null,
    style = {},
    gutter = null,
    wrap = null,
    ...props
}: RowProps) => {
    const inline = { ...style };

    if (wrap) inline.flexWrap = wrap;
    if (gutter) {
        inline.gap = gutter[0];
        inline.rowGap = gutter[1];
    }
    if (align) inline.alignItems = align;
    if (justify) inline.justifyContent = justify;

    return (
        <div className={classNames(styles.rowContainer, className)} style={inline} {...props}>
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
        xxl && styles["col-xxl-" + xxl],
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
