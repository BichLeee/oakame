import { Row, Col, CornerDottedDiv, Typography, Button } from "components/elements";
import s from "./listProducts.module.scss";
import { Product } from "@/components/modules";

import bocuse from "assets/images/products/bocuse.png";
import zola from "assets/images/products/zola.png";
import zolaSofas from "assets/images/products/zola-sofas.png";
import gauguin from "assets/images/products/gauguin.png";
import bonaparte from "assets/images/products/bonaparte-fauteuil.png";
import camus from "assets/images/products/camus.png";

const products = [
    {
        image: bocuse,
        type: "Dining tables",
        name: "bocuse",
        price: "4150",
    },
    {
        image: zola,
        type: "coffee tables",
        name: "zola",
        price: "1750",
    },
    {
        image: zolaSofas,
        type: "sofas",
        name: "zola",
        price: "10100",
    },
    {
        image: gauguin,
        type: "sofas",
        name: "gauguin",
        price: "3250",
    },
    {
        image: bonaparte,
        type: "armchairs",
        name: "bonaparte",
        price: "2850",
    },
    {
        image: camus,
        type: "benches",
        name: "camus",
        price: "1200",
    },
];

export const ListProducts = () => {
    return (
        <section className={s.container}>
            <CornerDottedDiv topRight={false} bottomLeft={false} bottomRight={false} className={s.header}>
                <Typography variant="h4" fontWeight="bold">
                    DISCOVER OUR UNIQUE,
                    <br /> SUSTAINABLE, HANDCRAFTED <br />
                    RECLAIMED OAK FURNITURE
                </Typography>
            </CornerDottedDiv>
            <Row align="end" gutter={[0, 60]}>
                <Col sm={24} md={12} xl={12}>
                    <div className={s.productWrapper}>
                        <Product {...products[0]} />
                    </div>
                </Col>
                <Col md={12} className={s.hiddenCol}></Col>
                <Col sm={24} md={12} xl={6}>
                    <div className={s.productWrapper}>
                        <Product {...products[1]} />
                    </div>
                </Col>
                <Col sm={24} md={12} xl={6}>
                    <div className={s.productWrapper}>
                        <Product {...products[2]} />
                    </div>
                </Col>
            </Row>
            <Row align="end" gutter={[0, 60]} style={{ marginTop: 50 }}>
                <Col sm={24} md={12} xl={6}>
                    <div className={s.productWrapper}>
                        <Product {...products[3]} />
                    </div>
                </Col>
                <Col sm={24} md={12} xl={6}>
                    <div className={s.productWrapper}>
                        <Product {...products[4]} />
                    </div>
                </Col>
                <Col sm={24} md={12} xl={6}>
                    <div className={s.productWrapper}>
                        <Product {...products[5]} />
                    </div>
                </Col>
                <Col sm={24} md={12} xl={6} className={s.buttonCol}>
                    <CornerDottedDiv style={{ marginTop: "5rem" }} hover>
                        <Button size="large">tous nos produits</Button>
                    </CornerDottedDiv>
                </Col>
            </Row>
        </section>
    );
};
