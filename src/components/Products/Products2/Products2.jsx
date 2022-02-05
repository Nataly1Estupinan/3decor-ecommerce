import { connect } from "react-redux";
import styles from "./Products2.module.css";
import Product from "../Product/Product";


const Products = ({ products }) => {
  return (
    <div className={styles.Container}>
      {products[1].map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
