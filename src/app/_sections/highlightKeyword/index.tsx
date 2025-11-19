"use client";

import { Typography } from "components/elements/typography";
import s from "./highlightKeyword.module.scss";
import { Button, Col, CornerDottedDiv, Flex, ImageWrapper, Row } from "@/components/elements";
import { useState } from "react";

import recycledImage from "assets/images/recycled.jpg";
import qualityImage from "assets/images/quality.webp";
import handcraftedImage from "assets/images/hand-crafted.jpg";

export const HighlightKeyword = () => {
    const [textStatus, setTextStatus] = useState([true, false, false]);

    return (
        <section className={s.container}>
            <div className={s.contentLeft}>
                <Row wrap="nowrap" className={s.descriptionContainer}>
                    <Col xs={24} sm={24} md={12}>
                        <Flex vertical className={s.keywords}>
                            <Typography
                                variant="h3"
                                fontWeight="700"
                                onClick={() => setTextStatus([true, false, false])}
                                className={`${s.textButton} ${textStatus[0] && s.active}`}
                            >
                                RECYCLED,
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="700"
                                onClick={() => setTextStatus([false, true, false])}
                                className={`${s.textButton} ${textStatus[1] && s.active}`}
                            >
                                QUALITY
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="700"
                                onClick={() => setTextStatus([false, false, true])}
                                className={`${s.textButton} ${textStatus[2] && s.active}`}
                            >
                                HAND-CRAFTED
                            </Typography>
                        </Flex>
                    </Col>
                    <Col xs={24} sm={24} md={12} style={{ minHeight: "160px" }}>
                        {textStatus[0] && (
                            <Typography>
                                Oakâme is serious about sustainable development and eco-responsible production. We
                                commit to the planet through the use of recycled materials. Our fabrics are partly made
                                from plastic bottles. To achieve this, we source from innovative companies with the same
                                philosophy, based on the circular economy.
                            </Typography>
                        )}
                        {textStatus[1] && (
                            <Typography>
                                Oakâme aims to guarantee the durability of each piece of furniture, so we select high
                                quality and resistant materials. The natural robustness of oak beams and the choice of
                                cushion filling, using pioneering production technologies, ensure that the furniture
                                will last at least 10 years from the date of manufacture.
                            </Typography>
                        )}
                        {textStatus[2] && (
                            <Typography>
                                Far from being industrially produced, Oakâme furniture shows off its Made in France
                                craftsmanship. From the construction of each solid oak structure, through to making the
                                cushion covers: we extol the excellence and uniqueness of our meticulously hand-crafted
                                products, whose finishing touches highlight their singular, simple and elegant designs.
                            </Typography>
                        )}
                    </Col>
                </Row>
                <CornerDottedDiv className={s.aboutUs} hover>
                    <Button size="auto" style={{ width: "100%", borderInline: "none" }}>
                        ABOUT US
                    </Button>
                </CornerDottedDiv>
                <div style={{ paddingBlock: "1rem" }} className={s.marqueContainer}>
                    <Typography fontWeight={900} variant="hero-text" className={s.marquee}>
                        {textStatus[0] && "RECYCLED"}
                        {textStatus[1] && "QUALITY"}
                        {textStatus[2] && "HAND-CRAFTED"}
                    </Typography>
                    <Typography fontWeight={900} variant="hero-text" className={s.marquee}>
                        {textStatus[0] && "RECYCLED"}
                        {textStatus[1] && "QUALITY"}
                        {textStatus[2] && "HAND-CRAFTED"}
                    </Typography>
                    <Typography fontWeight={900} variant="hero-text" className={s.marquee}>
                        {textStatus[0] && "RECYCLED"}
                        {textStatus[1] && "QUALITY"}
                        {textStatus[2] && "HAND-CRAFTED"}
                    </Typography>
                </div>
            </div>
            <div className={s.contentRight}>
                <div className={`${s.highlightImg} ${textStatus[0] && s.active}`}>
                    <ImageWrapper src={recycledImage.src} alt="recycled" />
                </div>
                <div className={`${s.highlightImg} ${textStatus[1] && s.active}`}>
                    <ImageWrapper src={qualityImage.src} alt="quality" />
                </div>
                <div className={`${s.highlightImg} ${textStatus[2] && s.active}`}>
                    <ImageWrapper src={handcraftedImage.src} alt="hand-crafted" />
                </div>
                <div className={s.blurDiv}></div>
            </div>
        </section>
    );
};
