import { Typography } from "components/elements/typography";
import s from "./history.module.scss";
import {
    Button,
    CornerDottedDiv,
    Flex,
    ImageWrapper,
} from "@/components/elements";

import paymentImg from "assets/images/payment.jpg";
import { Collapse } from "@/components/modules";

const collapseItems = [
    {
        title: "What is it ?",
        content:
            "All of Oakâme’s stylish furniture carry a registration plate equipped with an NFC, or Near Field Communication, chip. This enables data exchange with a compatible mobile device.",
    },
    {
        title: "Use",
        content:
            "Activate the NFC function on your smart phone, scan the Oakâme KONNEKT logo on the end of the coffee table and access the history of your reclaimed wood furniture.",
    },
    {
        title: "Functionnality",
        content:
            "With the NFC chip, customers can trace the origin and history of their reclaimed wood furniture. Surprise your guests by exploring your smart furniture’s functionality.",
    },
];

export const History = () => {
    return (
        <section className={s.container}>
            <Typography variant="hero-text">The history</Typography>
            <Typography
                variant="hero-text"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <span>of </span>
                <span>your</span>
            </Typography>
            <Typography variant="hero-text" style={{ textAlign: "right" }}>
                furniture
            </Typography>
            <Flex
                style={{ marginTop: "5rem" }}
                justify="space-between"
                align="end"
            >
                <div className={s.contentLeft}>
                    <ImageWrapper
                        src={paymentImg.src}
                        alt="payment"
                        width="100%"
                        height="auto"
                        ratio={2 / 1}
                    />
                    <Typography variant="h5" style={{ marginTop: "5rem" }}>
                        We pay tribute to the history of each oak beam that
                        makes up your Oakâme furniture. Discover their past
                        thanks to NFC technology.
                    </Typography>
                    <div style={{ width: "min-content", marginTop: "2rem" }}>
                        <Typography fontWeight={300}>
                            Be captivated by our design furniture that blends
                            innovation and heritage.
                        </Typography>
                        <CornerDottedDiv hover style={{ marginTop: "5rem" }}>
                            <Button size="large">MORE QUESTION</Button>
                        </CornerDottedDiv>
                    </div>
                </div>
                <div className={s.contentRight}>
                    <Collapse items={collapseItems} />
                </div>
            </Flex>
        </section>
    );
};
