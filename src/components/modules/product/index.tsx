import s from "./product.module.scss";
import { CornerDottedDiv, Flex, ImageWrapper, Typography } from "components/elements";

type ProductProps = {
    image: typeof ImageWrapper.prototype.props;
    type: string;
    name: string;
    price: string;
};

export const Product = ({ image, type, name, price }: ProductProps) => {
    return (
        <div className={s.container}>
            <div className={s.productImg}>
                <ImageWrapper src={image.src} alt="bocuse table" width="100%" ratio={6 / 4} />
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
                            <Typography variant="button" fontWeight="bold" transform="uppercase">
                                {type}
                            </Typography>
                        </Flex>
                        <div className={s.discover}>
                            <Typography variant="button" style={{ color: "#f6f1eb" }} fontWeight="bold">
                                DISCOVER
                            </Typography>
                        </div>
                    </CornerDottedDiv>
                </Flex>
                <div className={s.detailBottomWrapper}>
                    <CornerDottedDiv className={s.detailContentBottom} topLeft={false} bottomRight={false}>
                        <Typography variant="h4" fontWeight="bold" transform="uppercase" style={{ textAlign: "left" }}>
                            {name}
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" style={{ textAlign: "right" }}>
                            {price}$
                        </Typography>
                    </CornerDottedDiv>
                </div>
            </div>
            <div style={{ overflow: "hidden", marginTop: "2rem" }}>
                <Typography variant="h4" fontWeight="bold" className={s.productName} transform="uppercase">
                    {name}
                </Typography>
            </div>
        </div>
    );
};
