import { connect } from "react-redux";
import styles from "./Products3.module.css";

import Product from "../Product/Product";



const Products = ({products}) => {
    console.log(products[2]);
    return (
        <div className={styles.Container}>
           {products[2].map((product) => (
               <Product product={product} key={product.id}/>
           ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    };
  };
  
  export default connect(mapStateToProps)(Products);
