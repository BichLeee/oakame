import s from "./product.module.scss";
import {
    CornerDottedDiv,
    Flex,
    ImageWrapper,
    Typography,
} from "components/elements";
import img from "assets/images/products/bocuse_table.png";

export const Product = ({ ...props }) => {
    return (
        <div className={s.container} {...props}>
            <div className={s.productImg}>
                <ImageWrapper
                    src={img.src}
                    alt="bocuse table"
                    width="100%"
                    ratio={5 / 4}
                />
                <Flex className={s.detailTopWrapper}>
                    <CornerDottedDiv
                        className={s.detailContentTop}
                        topRight={false}
                        bottomLeft={false}
                        bottomRight={false}
                    >
                        <Flex
                            style={{
                                flex: 1,
                                paddingLeft: "0.7rem",
                                paddingBottom: "0.4rem",
                            }}
                            align="end"
                        >
                            <Typography variant="button" fontWeight="bold">
                                Dinning tables
                            </Typography>
                        </Flex>
                        <div className={s.discover}>
                            <Typography
                                variant="button"
                                style={{ color: "#f6f1eb" }}
                                fontWeight="bold"
                            >
                                DISCOVER
                            </Typography>
                        </div>
                    </CornerDottedDiv>
                </Flex>
                <div className={s.detailBottomWrapper}>
                    <CornerDottedDiv
                        className={s.detailContentBottom}
                        topLeft={false}
                        bottomRight={false}
                    >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            style={{ textAlign: "left" }}
                        >
                            BOCUSE
                        </Typography>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            style={{ textAlign: "right" }}
                        >
                            4150$
                        </Typography>
                    </CornerDottedDiv>
                </div>
            </div>
            <div style={{ overflow: "hidden", marginTop: "2rem" }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    className={s.productName}
                >
                    BOCUSE
                </Typography>
            </div>
        </div>
    );
};
