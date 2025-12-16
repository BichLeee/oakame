"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Typography } from "@/components/elements/typography";
import s from "./banner.module.scss";
import BonaparteCanape from "assets/images/bonaparte_canape.png";
import CamusTable from "assets/images/camus_table.png";
import BonaparteTable from "assets/images/bonaparte_table.png";
import { Button, Flex } from "components/elements";
import { CornerDottedDiv } from "@/components/elements/cornerDottedDiv";

const items = [
    {
        name: "bonaparte",
        type: "sofas",
        image: BonaparteCanape,
    },
    {
        name: "camus",
        type: "dining tables",
        image: CamusTable,
    },
    {
        name: "bonaparte",
        type: "coffee tables",
        image: BonaparteTable,
    },
];

export const Banner = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            setActive((prev) => (prev === 2 ? 0 : prev + 1));
        }, 5000);

        return () => clearTimeout(interval);
    }, [active]);

    return (
        <section className={s.container}>
            <div className={s.banner}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${s.bannerImage} ${index === active ? s.active : ""}`}
                        style={{ zIndex: active === index ? 4 : active < index ? -(3 - index) : index }}
                    >
                        <div className={s.bannerImageInner}>
                            <Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                ))}
                <div className={s.bannerFooter}>
                    <div style={{ perspective: 800, overflow: "hidden" }}>
                        <Typography
                            variant="h6"
                            transform="uppercase"
                            key={`type-${active}`}
                            className={s.animatedText}
                        >
                            {items[active].type}
                        </Typography>
                        {/* <Typography
                            variant="hero-text"
                            transform="uppercase"
                            key={`name-${active}`}
                            style={{ perspective: 800 }}
                        >
                            {items[active].name.split("").map((char, index) => (
                                <span
                                    key={index}
                                    className={s.animatedText}
                                    style={{
                                        animationDelay: `${index * 0.03}s`,
                                        animationDuration: `${0.8 - index * 0.05}s`,
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </Typography> */}
                        <Typography
                            variant="hero-text"
                            transform="uppercase"
                            key={`name-${active}`}
                            className={s.animatedText}
                        >
                            {items[active].name}
                        </Typography>
                    </div>
                    <Flex gap={16} style={{ width: "fit-content" }}>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`${s.thumbnail} ${index === active ? s.active : ""}`}
                                onClick={() => setActive(index)}
                            >
                                <Image src={item.image} fill alt={item.name} style={{ objectFit: "cover" }} />
                            </div>
                        ))}
                    </Flex>
                </div>
            </div>
            <div className={s.bottomText}>
                <Typography
                    element="h2"
                    variant="h2"
                    style={{ marginTop: "12rem" }}
                    fontWeight="medium"
                    transform="uppercase"
                >
                    Oakâme, DESIGN SUSTAINABLE AND UNIQUE FURNITURE MADE IN FRANCE.
                </Typography>

                <CornerDottedDiv style={{ marginTop: "5rem" }} hover>
                    <Button style={{ fontSize: "1.2rem" }}>Our concept</Button>
                </CornerDottedDiv>
            </div>
        </section>
    );
};
