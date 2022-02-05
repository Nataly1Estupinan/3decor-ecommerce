import styles from "./ProductList2.module.css";

import Products2 from "../../components/Products/Products2/Products2";

import Footer from "../../components/Footer/Footer";



const ProductList = () => {
  return (
    < div className={styles.Container}>
      
     
      
      <h1 className={styles.Title}>Categoría 2</h1>
      <Products2 />
      
      <Footer />
    </div>
  );
};

export default ProductList;
