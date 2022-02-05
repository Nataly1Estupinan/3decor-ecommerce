/* eslint-disable jsx-a11y/alt-text */
import { connect } from "react-redux";

import Products from "../../components/Products/Products1/Products";
import { addToCart } from "../../redux/Shopping/shopping-actions";

import styles from "./Product.module.css";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/ContactForm";

const Product = ({ current, addToCart }) => {
  return (
    <div className={styles.Container}>
      <Announcement />
      <Navbar />
      
      <div className={styles.Wrapper}>
        <div className={styles.ImgContainer}>
          <img className={styles.Image} src={current.img} alt={current.title} />
        </div>
        <div className={styles.InfoContainer}>
          <h1 className={styles.Title}>{current.title}</h1>
          <p className={styles.Desc}>{current.description}</p>
          <span className={styles.Price}>$ {current.price}</span>
          <div className={styles.FilterContainer}>
            <div className={styles.Filter}>
              <span className={styles.FilterTitle}>
                Medidas: {current.measure}
              </span>
            </div>
          </div>
          <div className={styles.AddContainer}>
            <button
              onClick={() => addToCart(current.id, current.category)}
              className={styles.Button}
            >
              AÑADIR
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Products />
      <Footer />
    </div>
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

//

// const Product = ({ current, addToCart }) => {
//   return (
//     <>
//     <Announcement/>
//     <Navbar />
//     <div className={styles.Container}>

//       <div className={styles.Wrapper}>
//         <div className={styles.ImgContainer}>
//           <img className={styles.Image} src={current.img} alt={current.title} />
//         </div>
//         <div className={styles.InfoContainer}>

//           <h1 className={styles.Title}>{current.title}</h1>
//           <p className={styles.Desc}>{current.description}</p>
//           <span className={styles.Price}>${current.price}</span>

//           <div className={styles.FilterContainer}>
//             <div className={styles.Filter}>
//               <span className={styles.FilterTitle}>Medidas: </span>

//               {current.measure}
//             </div>
//           </div>
//           <div className={styles.AddContainer}>

//             <button
//               className={styles.Button}
//               onClick={() => addToCart(current.id, current.category)}
//             >
//               AÑADIR AL CARRITO
//             </button>
//           </div>
//         </div>
//       </div>

//       <Products />

//       <Footer />
//     </div>
//     </>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     current: state.shop.currentItem,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (id, category) => dispatch(addToCart(id, category)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Product);
