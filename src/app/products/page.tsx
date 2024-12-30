import classNames from "classnames";

import s from "./products.module.scss";

function Products() {
    return <h1 className={classNames(s.container)}>products</h1>;
}

export default Products;
