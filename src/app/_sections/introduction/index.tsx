import { Typography, Flex, Row, Col, ImageWrapper } from "components/elements";
import s from "./introduction.module.scss";
import Image from "next/image";

import OakTree from "assets/images/oak-tree.png";
import ChairsImage from "assets/images/chairs.png";

export const Introduction = () => {
    return (
        <section className={s.container}>
            <div className={s.header}>
                <Typography variant="h4" fontWeight="bold">
                    HIGH QUALITY AND LONG LASTING
                </Typography>
            </div>
            <Row className={s.content} align="end" wrap="wrap-reverse">
                <Col sm={24} md={12}>
                    <Row
                        style={{ height: "100%" }}
                        gutter={[10, 10]}
                        align="end"
                    >
                        <Col sm={24} md={12}>
                            <Flex style={{ height: "100%" }}>
                                <Typography variant="h6">
                                    Enhance your indoor and outdoor spaces with
                                    our timeless, century-old solid oak beam
                                    furniture. Designed to withstand the test of
                                    time, our pieces will enrich your daily life
                                    now and for generations to come.
                                </Typography>
                                <ImageWrapper
                                    src={OakTree.src}
                                    alt="oak tree"
                                    style={{
                                        maxHeight: 500,
                                        marginTop: "auto",
                                    }}
                                />
                            </Flex>
                        </Col>
                        <Col sm={24} md={6}>
                            <Flex align="end" style={{ height: "100%" }}>
                                <div>
                                    <div
                                        style={{
                                            marginInline: 15,
                                            marginBottom: 30,
                                        }}
                                    >
                                        <ul>
                                            <li>
                                                <Typography variant="h6">
                                                    Oak: the noblest <br /> of
                                                    trees
                                                </Typography>
                                            </li>
                                        </ul>
                                    </div>
                                    <Typography variant="h6">
                                        resistant and timeless.
                                    </Typography>
                                </div>
                            </Flex>
                        </Col>
                    </Row>
                </Col>
                <Col sm={24} md={12}>
                    <ImageWrapper src={ChairsImage.src} alt="chairs image" />
                </Col>
            </Row>
        </section>
    );
};
