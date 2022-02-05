import { AddShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from "@material-ui/icons";
import { connect } from "react-redux";
import styles from "./Product.module.css";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";
import { Link } from "react-router-dom";



const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className={styles.Container}>
      
      <img className={styles.Image} src={product.img} alt={product.title}/>
      
      <div className={styles.Info}>
        <div className={styles.Icon}>
            <AddShoppingCartOutlined onClick={() => addToCart(product.id, product.category)}/>
        </div>
        <div className={styles.Icon}>
          <Link to={`product/${product.id}`}>
            <SearchOutlined onClick={() => loadCurrentItem(product)}/>
            </Link>
        </div>
        <div className={styles.Icon}>
            <FavoriteBorderOutlined/>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, category) => dispatch(addToCart(id, category)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
