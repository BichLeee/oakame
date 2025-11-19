"use client";

import { useState } from "react";
import s from "./collapse.module.scss";
import { Flex, Typography } from "@/components/elements";
import { IconArrowDown } from "@/components/SVGs";

type CollapseType = {
    items: { title: string; content: string }[];
};

export const Collapse = ({ items, ...props }: CollapseType) => {
    const [active, setActive] = useState(0);

    return (
        <div className={s.container} {...props}>
            {items.map((i, index) => (
                <div className={s.item} key={index}>
                    <Flex
                        align="center"
                        justify="space-between"
                        onClick={() => setActive(index)}
                        style={{ padding: "1.5rem" }}
                    >
                        <div className={s.title}>
                            <div className={s.dot}></div>
                            <Typography transform="uppercase" variant="h6" style={{ lineHeight: "normal" }}>
                                {i.title}
                            </Typography>
                        </div>
                        <div className={`${s.iconArrow} ${index === active && s.active}`}>
                            <IconArrowDown />
                        </div>
                    </Flex>
                    <div className={`${s.content} ${index === active && s.active}`}>
                        <Typography variant="body2" fontWeight={300}>
                            {i.content}
                        </Typography>
                    </div>
                </div>
            ))}
        </div>
    );
};
