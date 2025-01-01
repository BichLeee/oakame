import { Typography } from "components/elements/typography";
import s from "./listProducts.module.scss";
import { Product } from "@/components/modules";

export const ListProducts = () => {
    return (
        <section className={s.container}>
            <Typography>listProducts</Typography>
            <div className={s.productWrapper}>
                <Product />
            </div>
        </section>
    );
};
