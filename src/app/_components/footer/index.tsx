import { Button, Col, CornerDottedDiv, Flex, Row, Typography } from "@/components/elements";
import s from "./footer.module.scss";
import { IconOakameAlt2 } from "@/components/SVGs";
import Link from "next/link";

const contactLink = [
    { label: "Instagram", link: "#" },
    { label: "Linkedin", link: "#" },
    { label: "Facebook", link: "#" },
    { label: "Pinterest", link: "#" },
];

export const Footer = () => {
    return (
        <footer>
            <Row className={s.container}>
                <Col xs={3} className={s.sideCol}>
                    <CornerDottedDiv
                        className={s.dottedDiv}
                        bottomLeft={false}
                        style={{
                            width: "100%",
                            height: "100%",
                            textAlign: "left",
                        }}
                    >
                        <Typography variant="body5" transform="uppercase" fontWeight={400}>
                            Oakâme receives financial support from the Région Hauts-de-France Region
                        </Typography>
                    </CornerDottedDiv>
                </Col>
                <Col xs={24} md={18}>
                    <CornerDottedDiv
                        style={{
                            paddingBlock: 35,
                            width: "100%",
                        }}
                        className={s.dottedDiv}
                    >
                        <Flex vertical align="center" justify="center" gap={25}>
                            <IconOakameAlt2 width={44} />
                            <Typography variant="h4" transform="uppercase" fontWeight={700} style={{ maxWidth: 400 }}>
                                Unique, sustainable and handcrafted furniture
                            </Typography>
                            <Flex gap={4} justify="center">
                                {contactLink.map((l, idx) => (
                                    <Link href={l.link} key={idx}>
                                        <Typography
                                            variant="body2"
                                            transform="uppercase"
                                            fontWeight={400}
                                            className={s.socialLink}
                                        >
                                            {l.label}
                                            {idx < contactLink.length - 1 ? "," : ""}
                                        </Typography>
                                    </Link>
                                ))}
                            </Flex>
                        </Flex>
                    </CornerDottedDiv>
                    <Row style={{ borderTop: "1px solid var(--color-black)" }}>
                        <Col xs={12} style={{ borderRight: "1px solid var(--color-black)" }}>
                            <Button style={{ width: "100%", border: 0 }} size="small">
                                About us
                            </Button>
                        </Col>
                        <Col xs={12}>
                            <Button style={{ width: "100%", border: 0 }} size="small">
                                Products
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{ borderTop: "1px solid var(--color-black)" }}>
                        <Col xs={12} style={{ borderRight: "1px solid var(--color-black)" }}>
                            <Button style={{ width: "100%", border: 0 }} size="small">
                                lookbook
                            </Button>
                        </Col>
                        <Col xs={12}>
                            <Button style={{ width: "100%", border: 0 }} size="small">
                                contact
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{ borderTop: "1px solid var(--color-black)" }}>
                        <Col xs={8} style={{ borderRight: "1px solid var(--color-black)" }}>
                            <Button style={{ width: "100%", border: 0 }} size="small">
                                FAQ
                            </Button>
                        </Col>
                        <Col xs={8} style={{ borderRight: "1px solid var(--color-black)" }}>
                            <Button style={{ width: "100%", border: 0 }} size="small">
                                delivery and returns
                            </Button>
                        </Col>
                        <Col xs={8}>
                            <Button style={{ width: "100%", border: 0 }} size="small">
                                GTC
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{ borderTop: "1px solid var(--color-black)" }} className={s.additionalInfo}>
                        <Flex justify="center" style={{ paddingBlock: 20 }}>
                            <Flex vertical style={{ width: "50%" }} gap={28}>
                                <Typography variant="body5" transform="uppercase" fontWeight={400}>
                                    Oakâme receives financial support from the Région Hauts-de-France Region
                                </Typography>
                                <Typography variant="body2" transform="uppercase" fontWeight={400}>
                                    © 2024 Oakâme
                                    <br /> All rights reserved
                                </Typography>
                            </Flex>
                        </Flex>
                    </Row>
                    <Row style={{ borderTop: "1px solid var(--color-black)" }}>
                        <Flex style={{ overflow: "hidden" }} justify="center">
                            <div className={s.bigText}>OAKÂME</div>
                        </Flex>
                    </Row>
                </Col>
                <Col xs={3} className={s.sideCol}>
                    <Flex vertical style={{ height: "100%", textAlign: "right" }}>
                        <CornerDottedDiv
                            style={{ flex: "1", width: "100%" }}
                            className={s.dottedDiv}
                            bottomRight={false}
                        >
                            <div style={{ width: "100%" }}>
                                <Typography variant="body2" transform="uppercase" fontWeight={400}>
                                    My account Legals
                                </Typography>
                            </div>
                        </CornerDottedDiv>
                        <CornerDottedDiv
                            topLeft={false}
                            topRight={false}
                            bottomRight={false}
                            style={{
                                borderTop: "1px solid var(--color-black)",
                                width: "100%",
                            }}
                            className={s.dottedDiv}
                        >
                            <Typography variant="body2" transform="uppercase" fontWeight={400}>
                                © 2024 Oakâme All rights reserved
                            </Typography>
                        </CornerDottedDiv>
                    </Flex>
                </Col>
            </Row>
        </footer>
    );
};
