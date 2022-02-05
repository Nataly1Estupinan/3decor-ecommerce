import styles from "./ProductList2.module.css";
import Announcement from "../../components/Announcement/Announcement";
import Products2 from "../../components/Products/Products2/Products2";
import Navbar from "../../components/Navbar/Navbar";

import About from "../../pages/About/About";


const ProductList = () => {
  return (
    < div className={styles.Container}>
      <Announcement/>
      <Navbar/>
     
      
      <h2 className={styles.Title}>MOLDES EN SILICONA</h2>
      <h6>MOLDES CON DISEÑOS PERSONALIZADOS PARA FABRICAR PLACAS EN YESO CON FIGURAS 3D.</h6>
      <Products2 />
      <About/>
      
    </div>
  );
};

export default ProductList;
