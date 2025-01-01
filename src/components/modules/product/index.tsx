import s from "./product.module.scss";
import { ImageWrapper } from "components/elements";
import img from "assets/images/products/bocuse_table.png";

export const Product = ({ ...props }) => {
    return (
        <div className={s.container} {...props}>
            <ImageWrapper src={img.src} alt="bocuse table" />
        </div>
    );
};
