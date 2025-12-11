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
        }, 5600);

        return () => clearTimeout(interval);
    }, [active]);

    return (
        <section className={s.container}>
            <div className={s.banner}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${s.bannerImage} ${index === active ? s.active : ""}`}
                        style={{ zIndex: 2 - index + (index >= active ? 5 : 0) }}
                    >
                        <Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} />
                    </div>
                ))}
                <div className={s.bannerFooter}>
                    <div>
                        <Typography variant="h6" transform="uppercase" className={s.animatedText}>
                            {items[active].type}
                        </Typography>
                        <Typography variant="hero-text" transform="uppercase" className={s.animatedText}>
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
                                <Image
                                    src={item.image}
                                    width={124}
                                    height={74}
                                    alt={item.name}
                                    style={{ objectFit: "cover" }}
                                />
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
