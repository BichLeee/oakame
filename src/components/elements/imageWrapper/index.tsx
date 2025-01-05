import React from "react";
import styles from "./imageWrapper.module.scss";
import Image, { ImageProps } from "next/image";
import classNames from "classnames";

type ImageWrapperProps = {
    src: string;
    alt: string;
    style?: React.CSSProperties;
    className?: string;
    objectFit?: React.CSSProperties["objectFit"];
    width?: React.CSSProperties["width"] | null;
    height?: React.CSSProperties["height"] | null;
    sizes?: ImageProps | null;
    ratio?: React.CSSProperties["aspectRatio"] | null;
};

export const ImageWrapper = ({
    src = "",
    alt = "",
    style = {},
    className = "",
    objectFit = "cover",
    width = null,
    height = null,
    sizes = null,
    ratio = null,
    ...props
}: ImageWrapperProps) => {
    const inline = { ...style };
    if (width) inline.width = width;
    if (height) inline.height = height;
    if (ratio) inline.aspectRatio = ratio;

    return (
        <div className={classNames(styles.container, className)} style={inline}>
            <Image
                src={src}
                alt={alt}
                style={{ objectFit: objectFit }}
                fill
                {...sizes}
                {...props}
            />
        </div>
    );
};
