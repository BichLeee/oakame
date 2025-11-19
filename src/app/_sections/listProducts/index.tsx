import {
    Row,
    Col,
    CornerDottedDiv,
    Typography,
    Button,
} from "components/elements";
import s from "./listProducts.module.scss";
import { Product } from "@/components/modules";

export const ListProducts = () => {
    return (
        <section className={s.container}>
            <CornerDottedDiv
                topRight={false}
                bottomLeft={false}
                bottomRight={false}
                className={s.header}
            >
                <Typography variant="h4" fontWeight="bold">
                    DISCOVER OUR UNIQUE,
                    <br /> SUSTAINABLE, HANDCRAFTED <br />
                    RECLAIMED OAK FURNITURE
                </Typography>
            </CornerDottedDiv>
            <Row align="end" gutter={[0, 60]}>
                <Col sm={24} md={12} xl={12}>
                    <div className={s.productWrapper}>
                        <Product />
                    </div>
                </Col>
                <Col md={12} className={s.hiddenCol}></Col>
                <Col sm={24} md={12} xl={6}>
                    <div className={s.productWrapper}>
                        <Product />
                    </div>
                </Col>
                <Col sm={24} md={12} xl={6}>
                    <div className={s.productWrapper}>
                        <Product />
                    </div>
                </Col>
            </Row>
            <Row align="end" gutter={[0, 60]} style={{ marginTop: 50 }}>
                <Col sm={24} md={12} xl={6}>
                    <div className={s.productWrapper}>
                        <Product />
                    </div>
                </Col>
                <Col sm={24} md={12} xl={6}>
                    <div className={s.productWrapper}>
                        <Product />
                    </div>
                </Col>
                <Col sm={24} md={12} xl={6}>
                    <div className={s.productWrapper}>
                        <Product />
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
