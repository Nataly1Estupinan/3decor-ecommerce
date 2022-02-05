import { connect } from "react-redux";
import styles from "./Product.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products1/Products";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const Product = ({ current, addToCart }) => {
  return (
    <>
    <Announcement/>
    <Navbar />
    <div className={styles.Container}>
      

      <div className={styles.Wrapper}>
        <div className={styles.ImgContainer}>
          <img className={styles.Image} src={current.img} alt={current.title} />
        </div>
        <div className={styles.InfoContainer}>
      
          <h1 className={styles.Title}>{current.title}</h1>
          <p className={styles.Desc}>{current.description}</p>
          <span className={styles.Price}>${current.price}</span>
          
          <div className={styles.FilterContainer}>
            <div className={styles.Filter}>
              <span className={styles.FilterTitle}>Medidas: </span>

              {current.measure}
            </div>
          </div>
          <div className={styles.AddContainer}>
            {/* <div className={styles.AmountContainer}>
              <Remove />
              <span className={styles.Amount}>{current.qty}</span>
              <Add />
            </div> */}

            <button
              className={styles.Button}
              onClick={() => addToCart(current.id, current.category)}
            >
              AÑADIR AL CARRITO
            </button>
          </div>
        </div>
      </div>

      <Products />

      <Footer />
    </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, category) => dispatch(addToCart(id, category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
