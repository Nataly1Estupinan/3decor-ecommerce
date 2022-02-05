import styles from "./ProductList.module.css";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products1/Products";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";

const ProductList = () => {
  return (
    <div className={styles.Container}>
      <Announcement/>
     <Navbar/>
      
      
      <h2 className={styles.Title}>PLACAS DE YESO 3D</h2>
      <h6>ACABADOS EN PINTURA: MATE, METALIZADO Y POLIURETANO.</h6>
      
      <Products />
      <Form/>
      
      <Footer />
    </div>
  );
};

export default ProductList;
