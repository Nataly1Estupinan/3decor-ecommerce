import { connect } from "react-redux";
import styles from "./Products.module.css";

import Product from "../Product/Product";



const Products = ({ products }) => {
  console.log(products[0]);
  return (
    
    <div className={styles.Container}>
      
      {products[0].map((product) => (
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
