import { Typography, Flex, ImageWrapper } from "components/elements";
import s from "./introduction.module.scss";

import OakTree from "assets/images/oak-tree.png";
import ChairsImage from "assets/images/chairs.png";
import classNames from "classnames";

export const Introduction = () => {
    return (
        <section className={s.container}>
            <div className={s.header}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    style={{ maxWidth: "80%", marginLeft: "auto" }}
                >
                    HIGH QUALITY AND LONG LASTING
                </Typography>
            </div>
            <Flex className={classNames(s.content, s.customFlex)} align="end">
                <Flex
                    vertical={true}
                    justify="space-between"
                    className={s.contentLeft}
                >
                    <div className={s.parapraph}>
                        <Typography
                            variant="h6"
                            className={classNames(s.contentLeft)}
                        >
                            Enhance your indoor and outdoor spaces with our
                            timeless, century-old solid oak beam furniture.
                            Designed to withstand the test of time, our pieces
                            will enrich your daily life now and for generations
                            to come.
                        </Typography>
                    </div>
                    <Flex style={{ height: 500 }} gap={10}>
                        <div className={classNames(s.contentLeft)}>
                            <ImageWrapper src={OakTree.src} alt="oak tree" />
                        </div>
                        <Flex
                            align="end"
                            style={{ flex: 1 }}
                            className={classNames(s.contentRight, s.customFlex)}
                        >
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
                                                Oak: the noblest <br /> of trees
                                            </Typography>
                                        </li>
                                    </ul>
                                </div>
                                <Typography variant="h6">
                                    resistant and timeless.
                                </Typography>
                            </div>
                        </Flex>
                    </Flex>
                </Flex>
                <div className={s.contentRight}>
                    <ImageWrapper
                        src={ChairsImage.src}
                        alt="chairs image"
                        className={s.customImg}
                    />
                </div>
            </Flex>
        </section>
    );
};
