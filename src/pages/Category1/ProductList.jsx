import styles from "./ProductList.module.css";

import Products from "../../components/Products/Products1/Products";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const ProductList = () => {
  return (
    <div className={styles.Container}>
     <Navbar/>
      
      
      <h2 className={styles.Title}>PLACAS DE YESO 3D</h2>
      <h6>ACABADOS EN PINTURA: MATE, METALIZADO Y POLIURETANO.</h6>
      
      <Products />
      
      <Footer />
    </div>
  );
};

export default ProductList;
