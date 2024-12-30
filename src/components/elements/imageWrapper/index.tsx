import React from "react";
import styles from "./imageWrapper.module.scss";
import Image from "next/image";

type ImageWrapperProps = {
    src: string;
    alt: string;
    width?: number | `${number}%`;
    height?: number | `${number}%`;
    style?: React.CSSProperties;
    className?: string;
};

export const ImageWrapper = ({
    src = "",
    alt = "",
    width = "100%",
    height = "100%",
    style = {},
    className = "",
    ...props
}: ImageWrapperProps) => {
    return (
        <div className={styles.container} style={{ width, height, ...style }}>
            <Image
                src={src}
                alt={alt}
                style={{ objectFit: "cover" }}
                className={className}
                fill
                {...props}
            />
        </div>
    );
};
