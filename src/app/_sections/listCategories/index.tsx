"use client";

import React, { useState } from "react";

import { Typography } from "components/elements/typography";
import { Col, ImageWrapper, Row } from "components/elements";
import s from "./listCategories.module.scss";

const categoryList = [
    {
        label: "armchairs",
        images: [
            "/armchairs/bocuse_banc.webp",
            "/armchairs/camus_banc.webp",
            "/armchairs/descartes_banc.webp",
            "/armchairs/matisse_banc-2.webp",
        ],
    },
    {
        label: "benches",
        images: ["/benches/BONAPARTE.jpg", "/benches/camus_banc.webp"],
    },
    {
        label: "coffee tables",
        images: ["/coffee_tables/bonaparte_fauteuilV2.webp", "/coffee_tables/gauguin_fauteuilV2.webp"],
    },
    {
        label: "dining tables",
        images: [
            "/dining_tables/bocuse_table-a-manger.webp",
            "/dining_tables/camus_table-a-manger.webp",
            "/dining_tables/matisse_table-a-manger.webp",
        ],
    },
    {
        label: "other furniture",
        images: [
            "/table_furniture/bonaparte_table-basse.webp",
            "/table_furniture/gauguin_table-basse.webp",
            "/table_furniture/hugo_table-basse.webp",
            "/table_furniture/zola-_table-basse.webp",
        ],
    },
    {
        label: "sofas",
        images: ["/sofas/fontaine-tabouret.webp", "/sofas/moulin_tabouret.webp"],
    },
    {
        label: "stools",
        images: ["/stools/image_PRZ.webp", "/stools/moliere_autre-mobilier.webp"],
    },
];

const defaultImages = [
    "/benches/BONAPARTE.jpg",
    "/table_furniture/gauguin_table-basse.webp",
    "/dining_tables/bocuse_table-a-manger.webp",
    "/coffee_tables/bonaparte_fauteuilV2.webp",
];

export const ListCategories = () => {
    const [hover, setHover] = useState<number>(-1);

    return (
        <section className={s.container}>
            <Typography>Our categories</Typography>
            <Typography
                variant="h1"
                fontWeight={700}
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "80%",
                }}
            >
                {categoryList.map((c, index) => (
                    <span
                        key={index}
                        style={{
                            textWrap: "nowrap",
                            cursor: "pointer",
                            opacity: hover >= 0 && hover !== index ? 0.1 : 1,
                            paddingLeft: "1.5rem",
                        }}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(-1)}
                    >
                        {c.label}
                        {index < categoryList.length - 1 ? ", " : ""}
                    </span>
                ))}
            </Typography>
            <Row style={{ height: 200, marginTop: "1rem" }} gutter={[8, 8]} wrap="nowrap">
                {hover >= 0
                    ? categoryList[hover].images.map((i) => (
                          <Col xs={6} key={i} className={s.imageWrapper}>
                              <ImageWrapper src={i} alt="furniture" ratio={2 / 3} className={s.furnitureImage} />
                          </Col>
                      ))
                    : defaultImages.map((i) => (
                          <Col xs={6} key={i} className={s.imageWrapper}>
                              <ImageWrapper src={i} alt="furniture" ratio={2 / 3} className={s.furnitureImage} />
                          </Col>
                      ))}
            </Row>
        </section>
    );
};
