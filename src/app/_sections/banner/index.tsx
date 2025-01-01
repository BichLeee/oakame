import { Typography } from "@/components/elements/typography";
import s from "./banner.module.scss";

import BonaparteCanape from "assets/images/bonaparte_canape.png";
import CamusTable from "assets/images/camus_table.png";
import BonaparteTable from "assets/images/bonaparte_table.png";
import Image from "next/image";
import { Button } from "components/elements";
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
    return (
        <section className={s.container}>
            <div className={s.banner}>
                <Image
                    src={items[1].image}
                    alt={items[1].name}
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div className={s.bannerFooter}>
                    <div>
                        <Typography variant="h6">{items[1].type}</Typography>
                        <Typography variant="hero-text">
                            {items[1].name}
                        </Typography>
                    </div>
                    <div>items</div>
                </div>
            </div>
            <div className={s.bottomText}>
                <Typography
                    element="h2"
                    variant="h2"
                    style={{ marginTop: "12rem" }}
                    fontWeight="medium"
                >
                    Oakâme, DESIGN SUSTAINABLE AND UNIQUE FURNITURE MADE IN
                    FRANCE.
                </Typography>

                <CornerDottedDiv style={{ marginTop: "5rem" }}>
                    <Button>Our concept</Button>
                </CornerDottedDiv>
            </div>
        </section>
    );
};
