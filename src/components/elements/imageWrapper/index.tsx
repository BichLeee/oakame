import React from "react";
import styles from "./imageWrapper.module.scss";
import Image from "next/image";
import classNames from "classnames";

type ImageWrapperProps = {
    src: string;
    alt: string;
    style?: React.CSSProperties;
    className?: string;
    objectFit?: React.CSSProperties["objectFit"];
    width?: React.CSSProperties["width"] | null;
    height?: React.CSSProperties["height"] | null;
};

export const ImageWrapper = ({
    src = "",
    alt = "",
    style = {},
    className = "",
    objectFit = "cover",
    width = null,
    height = null,
    ...props
}: ImageWrapperProps) => {
    const inline = { ...style };
    if (width) inline.width = width;
    if (height) inline.height = height;

    return (
        <div className={classNames(styles.container, className)} style={inline}>
            <Image
                src={src}
                alt={alt}
                style={{ objectFit: objectFit }}
                fill
                {...props}
            />
        </div>
    );
};
